import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon
} from 'react-share';
// material
import { Box, Card, Divider, Skeleton, Container, Typography, Pagination } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../redux/store';
import { getPost, getRecentPosts } from '../redux/slices/blog';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Markdown from '../components/Markdown';
import BlogPostHero from '../components/BlogPostHero';

// ----------------------------------------------------------------------

const POST_BODY = `
<br/>
<p data-selectable-paragraph="">UniX Gaming is delighted to announce our partnership with DeHorizon. The Metaverse, Play-to-Earn, and NFTs have accelerated gaming growth while simultaneously mesmerising millions and catching the world&rsquo;s attention.</p>
<p data-selectable-paragraph="">We at UniX Gaming are driven by a strong desire to use the convergence of Cryptocurrency, Blockchain and Gaming technology to empower people with various chances to improve their lives. Thousands of our scholars in underdeveloped countries can multiply their incomes by earning up to five times their average national monthly salary, thanks to UniX Gaming.</p>
<p data-selectable-paragraph="">With all the growth around us, we partner with DeHorizon to get involved in the coming high fantasy GvG universe. UniX Gaming will not only offer a play-to-earn platform but will also offer a learn-to-earn option. UniX believes that education is essential for people to take advantage of job opportunities in their own countries and abroad.</p>
<p data-selectable-paragraph="">UniX Gaming has invested in team battle DeVerse as part of our cooperation. UniX Gaming aspires to be the largest play-to-earn guild in the world. With over 191k Discord members and more than 1300 scholars, we already have one of the largest communities in the space and are well on our way to achieving this. We want to transform the gaming business through play-to-earn and develop a learn-to-earn incentivisation platform.</p>
<br/><h3 data-selectable-paragraph="">Who is Dehorizon, and what is their Vision?</h3>
<p data-selectable-paragraph="">DeHorizon is a metaverse game ecosystem where players can collaborate, socialise, entertain, and even make money with their peers&rsquo; avatars. DeHorizon&rsquo;s long-term goal is to construct an autonomous and collaborative metaverse carnival that unlocks the full potential of GameFi, SocialFi, and NFTs.</p>
<p data-selectable-paragraph="">The Play-to-Earn industry has flourished thanks to the quick expansion of GameFi and NFTs. DeHorizon, on the other hand, feels that an actual metaverse ecology should place a greater focus on Play for Fun and Earn, which will usher in the next wave. As a result, DeHorizon is gearing up for three distinct types of games:</p>
<p data-selectable-paragraph="">&middot; Team battle DeVerse,</p>
<p data-selectable-paragraph="">&middot; Battleroyale DeTournament,</p>
<p data-selectable-paragraph="">&middot; And dragon-racing DeQuidditch.</p>
<p data-selectable-paragraph="">Ranger, Rogue, Alchemist, Adventurer, and Warrior are five major NFTs in the DeHorizon metaverse, collectively known as Numen. All of these are critical to DeVerse&rsquo;s success. Each round will feature 30 players from The Akademia Hall vs 30 players from the Shaharists camp in the City of Dawn. The match is decided in less than 20 minutes, and the team with the highest score wins the battle.</p>
<p data-selectable-paragraph="">Every two weeks, two leaderboards will be revealed:</p>
<p data-selectable-paragraph="">&middot; A kills leaderboard</p>
<p data-selectable-paragraph="">&middot; And a winners leaderboard.</p>
<p data-selectable-paragraph="">Players who place high on the leaderboard will be rewarded with a substantial quantity of DVT, the in-game currency. DeVerse&rsquo;s Alpha version is set to launch in the first quarter of 2022.</p>
<p data-selectable-paragraph="">DeHorizon is dedicated to becoming the next generation of Metaverse Game Ecosystem, allowing users to create, earn, and entertain with other players in an immersive environment. The initial step to joining DeHorizon Metaverse will be to play games based on Ethereum-EVM compatible chains, where players can play for fun and earn money.</p>
<p data-selectable-paragraph="">DeHorizon Metaverse&rsquo;s long-term ambition is to build an autonomous and co-create a virtual carnival, they term as &ldquo;Disneyland&rdquo; to all Metaverse humans across numerous chains, enabling Metaverse interoperability.</p>
<p data-selectable-paragraph="">DeHorizon games establish a solid foundation for the future virtual &ldquo;Disneyland&rdquo; in the DeHorizon metaverse, allowing users to earn and explore a mesmerising environment with many exciting game modes and activities.</p>
<br/><h3 data-selectable-paragraph="">Growing Together as a Team</h3>
<p data-selectable-paragraph="">The team behind DeHorizon Metaverse is a group of gaming veterans from Youzu, EA, Dungeons and Dragons, and more as we steer into the next generation of gaming via the metaverse ecosystem. When we met with DeHorizon online, we were blown away by what they were working on and where they were heading. We are ecstatic to be a part of this incredible movement and prepare for the upcoming DeVerse in early 2022.</p>
<p data-selectable-paragraph=""><em>UniX Gaming is very excited to be a part of DeHorizon. Shane and the team share the same goal: to build a stronger community within the Play-To-Earn space and give the best gaming experience for the players. We can&rsquo;t wait to meet everyone in the Metaverse! &mdash; Mirko Basil CEO UniX Gaming.</em></p>
<p data-selectable-paragraph=""><em>&ldquo;I can&rsquo;t wait to see the thrilling battle moment from UniX Gaming. The participation of UniX Gaming inspires me a lot. See you in DeVerse soon!&rdquo; &mdash; Shane Zhu, Founder at DeHorizon Foundation.</em></p>
<p data-selectable-paragraph="">Stay tuned as we transform the gaming and metaverse ecosystems.</p>`;

export default function BlogPost5() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX Gaming partners with DeHorizon, engaging in a competitive GvG universe';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*LzZvI8Czyyp7pQ87U5cImA.jpeg"
          />

          <div
            style={{
              width: '300px',
              margin: '50px auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TwitterShareButton url={pageurl} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            &nbsp;&nbsp;&nbsp;
            <FacebookShareButton url={pageurl} title={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            &nbsp;&nbsp;&nbsp;
            <EmailShareButton url={pageurl} title={title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            &nbsp;&nbsp;&nbsp;
            <WhatsappShareButton url={pageurl} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            &nbsp;&nbsp;&nbsp;
            <LinkedinShareButton url={pageurl} title={title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div style={{ padding: '0 50px 50px', maxWidth: '850px', margin: '0 auto' }}>
            <Markdown children={POST_BODY} />
          </div>
        </Card>
      </Container>
    </Page>
  );
}
