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
<br/><br/>
<p>UniX Gaming launched in June 2021, making our platform less than a year old and still in its initial stages. Despite that, we have achieved some monumental feats in this time, building a guild consisting of over 200,000 members, 20 esports teams, and over 10 million views on our streams worldwide. We have partnered with many exciting projects and play2earn games, and have even created our own launchpad, &lsquo;Final Round&rsquo; from which we will be able to launch some of the most anticipated triple-A games, giving our community first access to these titles.</p>
<p>Now we have one of our most sensational announcements to date. We have officially partnered with the second largest game on the metaverse, The Sandbox! This partnership will have major implications and benefits for both companies, and the communities which we will explore further in this article.</p>
<br/><h3>What is The Sandbox?</h3>
<p>The Sandbox, a subsidiary of Animoca Brands, is one of the leading decentralized virtual worlds that has been driving the growth of demand for virtual real estate. It&rsquo;s a community-driven platform where creators can monetize assets and gaming experiences on the blockchain. The Sandbox already has over 40 million global installs on mobile and has partnered with some major IPs and brands including Adidas, Snoop Dogg, The Walking Dead, Deadmau5, Atari, Rollercoaster Tycoon, Care Bears, The Smurfs, and more. The Sandbox offers players and creators a decentralized and intuitive platform that allows users to create immersive 3D worlds and game experiences. Furthermore, it provides the ability to safely store, trade, and monetize their creations.</p>
<p>The Sandbox is currently the second-largest game on the Metaverse and the fastest growing. Due to the rate that it is currently expanding, many of the biggest brands are targeting it as their entry point into the metaverse, as already proven through companies such as Adidas. Because of this, The Sandbox struggles to develop for this many people. This is where the partnership with UniX comes into play.</p>
<br/><h3>Partnership with UniX</h3>
<p>UniX&rsquo;s role within The Sandbox is to become ecosystem developers. As The Sandbox metaverse continues to expand, many more high-profile brands will be vying to purchase land within the game. Although these major companies are buying up land, many lack the resources to actually develop upon it. As ecosystem developers, UniX will be able to build on behalf of these major brands, creating new environments, buildings, stores, etc. This allows UniX to increase our exposure within the metaverse, whilst also giving us the opportunity for many more partnerships with major businesses. We will also be provided our own land on which we plan to develop a UniX centered environment, becoming prevalent within the world.</p>
<p>In addition to developing for these major brands, UniX will also be creating mini-games and a social area for the community to play and experience. Some of the mini-games currently in prototype development include &lsquo;Pachinko&rsquo;, an old Japanese-style pinball game, and a more complex tower defense game. More are planned and we&rsquo;ll be able to see many of these implemented into The Sandbox in the future. Stay tuned for future updates, sneak peeks, and release dates on these mini-games.</p>
<p>We love to have our members as involved as possible, therefore we also plan on opening up discussions with the UniX community through our Telegram channel to let our members give their suggestions on what they want to see for future mini-games. The top suggestions will be taken and put to a vote within the community, so our developers can work on the games that are the most popular. Through this, the UniX community will have influence through us in the development of The Sandbox metaverse.</p>
<p>One of the major reasons that UniX was a go-to choice for The Sandbox to partner with on this, is due to the recent launch of our game development studios, &lsquo;1Mhz Studios&rsquo;. The gaming studios incorporate 16 full-time game developers, as well as 8 outsourced developers, all working towards our goal of building the number one ecosystem through environments and games. The developers we currently have to utilize in the studios have all worked on huge titles previously, both games and movies, such as Star Trek: Resurgence, Pacific Rim Uprising, and Bygone Dreams.</p>
<p>This collective of talent, coupled with the incredible community that we have built within the Play-to-Earn space, made UniX a perfect and easy choice for a partnership with The Sandbox.</p>
<p>Another aim for UniX is to eventually incorporate our educational aspect into The Sandbox metaverse. We have a focus on providing education and accessibility of the space to our community and the wider world, and we hope in time this will be another step in that direction. The details are still being finalized but look out for the implementation of the UniX education platform within The Sandbox sometime in the future.</p>
<br/><h3>UniX Community</h3>
<p>We love to bring massive announcements like this to our community members as we know how dedicated the UniX family is to our progression and achievement of the goals we set. As always, these partnerships and improvements will only benefit the community.</p>
<p>Establishing ourselves as the number one developer in such an immense platform in the metaverse will further improve UniX&rsquo;s standing within the Play-to-Earn world and increase our renown in the space. It will also provide the opportunity for many more high-profile partnerships with massive brands. As a knock-on effect, our token price will increase, and all our current holders and investors will see their wallets improve as a result.</p>
<p>The UniX community will also benefit from having first access to certain rewards within the metaverse. These include NFT drops and tokens that can be earned through playing the UniX mini-games. We always have our community at heart, and therefore strive to make sure that our members benefit from every decision and improvement that we make.</p>
<p>The partnership with The Sandbox is only our first step into the metaverse, but you can be sure that it won&rsquo;t be our last. We plan on becoming more than just a gaming guild, but a gaming ecosystem within the space. As always, stay up to date for more information and announcements coming soon!</p>
`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX announces strategic partnership with The Sandbox';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*VAfGG-OwGxblsSrXiW6lrw.jpeg"
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
