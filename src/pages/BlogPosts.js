import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
// material
import { Box, Grid, Button, Skeleton, Container, Typography, Stack } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../redux/store';
import { getPostsInitial, getMorePosts } from '../redux/slices/blog';
// hooks
import useSettings from '../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// components
import Page from '../components/Page';
import BlogPostCard from '../components/BlogPostCard';

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default function BlogPosts() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { posts, hasMore, index, step } = useSelector((state) => state.blog);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);

  useEffect(() => {
    dispatch(getPostsInitial(index, step));
  }, [dispatch, index, step]);

  return (
    <Page title="Blog: Posts | UnixGaming">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Grid item xs={12} xl={10}>
          <Typography variant="h3" component="h1" sx={{ mb: 5, textAlign: 'center' }}>
            Recent Blog Posts
          </Typography>
        </Grid>
        {/* <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          loader={SkeletonLoad}
          dataLength={posts.length}
          style={{ overflow: 'inherit' }}
        > */}
        <Grid container spacing={3}>
          <BlogPostCard
            key={1}
            title="Is Crypto Gaming the Future?"
            cover="https://www.pragmaticcoders.com/hubfs/nft-crypto-gaming-developers.jpg"
            url="/is-crypto-gaming-the-future"
            index={0}
          />
          <BlogPostCard
            key={1}
            title="Top 5 play to earn crypto games 2021"
            cover="https://images.pexels.com/photos/159204/game-controller-joystick-joypad-gamepad-159204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            url="/top-5-games"
            index={0}
          />
          <BlogPostCard
            key={1}
            title="What are metaverse gaming projects?"
            cover="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            url="/metaverse-gaming"
            index={1}
          />
          <BlogPostCard
            key={1}
            title="How crypto gaming works"
            cover="https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            url="/crypto-gaming"
            index={1}
          />
          <BlogPostCard
            key={1}
            title="How Metaverse Will Affect Crypto"
            cover="https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            url="/metaverse-crypto"
            index={1}
          />
          <BlogPostCard
            key={1}
            title="UniX Gaming Fundraise Has Officially Reached $28 Million"
            cover="https://miro.medium.com/max/1400/0*lhPQdN-n57iKiSGc"
            url="/unix-launch"
            index={1}
          />
        </Grid>
        {/* </InfiniteScroll> */}
      </Container>
    </Page>
  );
}
