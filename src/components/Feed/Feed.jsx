import React, { useState, useEffect, useMemo } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [channelThumbnails, setChannelThumbnails] = useState({});

    const fetchData = async () => {
        try {
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
            const response = await axios.get(videoList_url);
            const data = response.data.items;
            setData(data);
            console.log("Video data fetched:", data);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    const fetchChannelThumbnails = async (channelIds) => {
        try {
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelIds.join(',')}&key=${API_KEY}`;
            const response = await axios.get(channel_url);
            const data = response.data.items;
            const thumbnails = {};
            data.forEach(channel => {
                thumbnails[channel.id] = channel.snippet.thumbnails.default.url;
            });
            return thumbnails;
        } catch (error) {
            console.error("Error fetching channel data:", error);
            return {};
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    useEffect(() => {
        const fetchAllChannelThumbnails = async () => {
            const channelIds = [...new Set(data.map(video => video.snippet.channelId))];
            if (channelIds.length > 0) {
                const thumbnails = await fetchChannelThumbnails(channelIds);
                setChannelThumbnails(thumbnails);
            }
        };

        if (data.length > 0) {
            fetchAllChannelThumbnails();
        }
    }, [data]);

    const viewCountFormat = (viewCount) => {
        if (viewCount > 1000000) {
            return (viewCount / 1000000).toFixed(1) + 'M';
        } else if (viewCount > 1000) {
            return (viewCount / 1000).toFixed(1) + 'K';
        } else {
            return viewCount.toString();
        }
    };

    const memoizedData = useMemo(() => data, [data]);
    const memoizedThumbnails = useMemo(() => channelThumbnails, [channelThumbnails]);

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='yt__feed'>
            {memoizedData.map((item, index) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='yt__feed-card' key={index}>
                    <img src={item.snippet.thumbnails.high.url} alt="" />
                    <div className='yt__feed-card_description'>
                        {memoizedThumbnails[item.snippet.channelId] ? (
                            <img src={memoizedThumbnails[item.snippet.channelId]} alt="" />
                        ) : (
                            <img src="/placeholder-thumbnail.jpg" alt="Loading..." />
                        )}
                        <div>
                            <h2 className='yt__feed-truncate'>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{viewCountFormat(item.statistics.viewCount)} &nbsp;Views &nbsp;&bull;&nbsp; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Feed;
