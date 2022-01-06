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
<br/><h3><strong>UniX Gaming welcomes Thetan Arena!</strong></h3>
<p data-selectable-paragraph="">UniX Gaming is pleased to announce its latest partnership with Thetan Arena! Thetan Arena becomes a part of one of the most prominent play-to-earn guilds to further create and distribute wealth for gamers and creators. The Play-to-Earn blockchain gaming industry continues to soar with essential partnerships such as this, and we couldn&rsquo;t be more excited!</p>
<br/><h3><strong>Who is Thetan Arena?</strong></h3>
<p data-selectable-paragraph="">Thetan Arena is a MOBA (Multi Online&nbsp;Battle Arena) based on Blockchain technology. It has many modern, exciting, trending game modes, such as the classic MOBA tower rush or Battle Royale. It brings you fast-paced gameplay that only lasts up to 5 minutes, making it ideal for on-the-go gaming and the best part? It introduces a brand-new play-to-earn system, allowing you to earn cryptocurrency by playing and trading NFT items in the marketplace!</p>
<p data-selectable-paragraph="">The official currency is Thetan Coin; $THC and Thetan Gems; $THG, and both of them are listed and tradeable on many Decentralized Exchange platforms known as DEXs.</p>
<p data-selectable-paragraph="">If you&rsquo;re looking for an ecosystem for Play-To-Earn games on the blockchain that allows gamers to hold tokens and make liquid cash in the long run, you know you have to look at Thetan Arena! You can hold $THC and Thetan Gem $THG tokens, trade them and earn.</p>
<p data-selectable-paragraph="">Games are available on Android, iOS and PC platforms, and you can gather your friends, form a team and earn with your gaming skills.</p>
<p data-selectable-paragraph="">I know what&rsquo;s on your mind right now is to ask how it works. Well, you&rsquo;re in luck because that&rsquo;s why we&rsquo;re here!</p>
<p data-selectable-paragraph="">How it works in the Thetan Arena is that you control a character (known as &ldquo;hero&rdquo; &ldquo;) fighting on a battlefield with a top-down view. To win a match, the player or team must defeat other players or meet the game mode&rsquo;s prevailing conditions. You gain rewards when bringing down an enemy&rsquo;s tower or gathering the most superstars. There you have it! You do this over and over and stack your coins easily.</p>
<p data-selectable-paragraph="">You can participate in the daily battles, quests, or rank rewards. As long as you bring your opponents down and win your matches, there&rsquo;s no stopping you. Get your coins, trade them on a DEX and earn.</p>
<br/><h3><strong>Background of Thetan Arena</strong></h3>
<p data-selectable-paragraph="">Thetan Arena is a brainchild of Wolffun Game. Wolffun is a Vietnamese game studio located in Ho Chi Minh city. Before Thetan Arena, Wolffun made &ldquo;Tank Raid Online&rdquo; and &ldquo;Heroes Strike Online&rdquo;, which have retrospectively reached the 12-million and 8-million milestone. As if that&rsquo;s not enough, the product went on to win the Editors&rsquo; Choice prize while Wolffun was rewarded with the &ldquo;Top 10 Google Game Launcher&rdquo; and honoured by Google at Busan G-star 2018, amazing feats.</p>
<p data-selectable-paragraph="">The official release date of Thetan Arena was the 27th of November, 2021, and it reached 5 million players in just more than a week, a remarkable milestone in the NFT gaming industry!</p>
<p data-selectable-paragraph="">The reason why Wolffun uses blockchain technology is to solve a problem in traditional conventional games. For example, a traditional game may meet its end when you complete it; we&rsquo;ve all completed Call of Duty, for instance, or Resident Evil and moved on (these games were designed this way). All the items we collected in the game remained in the game. Leaving collected items in a game is the opposite of what happens in Thetan Arena; an item minted and owned on the Blockchain system remains! You may, however, transfer it to another form of property. But in the end, it will still bring you financial benefits!</p>
<br/><h3><strong>The vision</strong></h3>
<p data-selectable-paragraph="">The vision is to create a sustainable ecosystem where stakeholders can enjoy their best games, have fun and build wealth.</p>
<br/><h3><strong>What are their plans?</strong></h3>
<p data-selectable-paragraph="">Soon, Thetan Arena will organize special events and tournaments which allow players like you to earn $THG and unique NFTs. As a holder of $THG, you will have the right to vote and decide how you would like the tokens burned and treasury allocated, precisely as it is in a DAO.</p>
<br/><h3><strong>Nature of Thetan Arena&rsquo;s partnership with UniX?</strong></h3>
<p data-selectable-paragraph="">As one of the most prominent play-to-earn guilds in the blockchain gaming community, UniX Gaming allows Thetan Arena to be part of a wider community! This partnership gives gamers worldwide access to amass, distribute wealth through UniX Gaming and brings Thetan Arena into a more extensive Play-to-earn Network!</p>
<br/><h3><strong>Conclusion</strong></h3>
<p data-selectable-paragraph="">UniX Gaming extends the opportunity for gamers worldwide, including third world countries, to create wealth by holding tokens and trading NFTs with partnerships such as this.</p>
<p data-selectable-paragraph="">We are witnesses to an exciting time in the world of blockchain gaming and can&rsquo;t wait for what the future holds for all involved!</p>`;

export default function BlogPost5() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX Gaming x Thetan Arena — A Partnership For The Future';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*FN8sts3240gCTw8eU62cIQ.jpeg"
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
