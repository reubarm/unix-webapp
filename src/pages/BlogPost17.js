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
<p>UniX Gaming is happy to announce a groundbreaking partnership with MonkeyBall, the next-generation esports metaverse, in a play-to-earn gaming strategy. This partnership move couldn&rsquo;t have come at a better time due to MonkeyBall&rsquo;s quick, turn-based, play-to-earn, arcade soccer game that offers a high production value gaming experience.</p><br/>
<p>What does this partnership mean for the already existing 192K UniX Gaming community members? First and foremost, this partnership provides a larger community of members, both from UniX Gaming and MonkeyBall. The partnership is a move that will allow players to participate in the MonkeyBall games and earn income, buy Monkey and Stadium NFTs, and learn more about the Monkeyball gaming system.</p><br/>
<p>The next big question would be, &lsquo;How does MonkeyBall operate in this play-to-earn gaming strategy?&rsquo; Well, MonkeyBall incorporates two teams, each with 4 Monkeys playing the positions of Striker, Defender, Midfielder, and Goalkeeper. There are six rounds of play per half, and the first team to 3 goals wins. Participants can boost their Monkeys&rsquo; abilities and in-game performance by caring for, training them and increasing their morale in this play-to-earn game. Stadium owners also earn from matches they host, whilst other players can influence the gameplay by acting as spectators and cheering for the winning team. The in-game currency token, MonkeyBucks ($MB), is split between the winning team, stadium owner, and spectators who root for the winning team when a match ends.</p><br/>
<p>Onboarding MonkeyBall into UniX Gaming will allow players to create, play, compete and earn. This comes with a high production value, multiplayer gaming based on the Solana blockchain, Non-Fungible Tokens (NFTs), and decentralized finance to deliver an exciting, turn-based, play-to-earn soccer game that&rsquo;s easy to learn yet hard to master.</p><br/>
<p>Monkeyball will bring in exciting incentives that allows players to participate in the game and earn income in multiple ways for the two categories of players; Active and Passive players. Players will have the ability to own Monkeys, build a team and win matches, own stadiums and host matches, and take the role of a match spectator and earn by cheering for the winning teams.</p><br/>
<p>The other exciting aspect that this partnership brings is the ability to improve your Monkey gaming skills; Monkey NFTs have unique DNAs composed of Appearance, Trainable Abilities, and Special Elements. Monkeys are born with potential scores for each trait; a rare monkey will be presented with a higher score for any of their traits. Players will have the ability to choose their preferred uniforms, jewellery, and boots, amongst other in-game assets for their Monkeys. These assets, if used correctly, will have a massive boost towards the skills and capabilities of the respective Monkey.</p><br/>
<p>The play-to-earn feature in UniX Gaming will have a boost from this partnership based on MonkeyBall&rsquo;s NFTs. Monkeys will be the team players with NFT assets owned by game players. The Monkeys serve as a play-to-earn initiative, allowing players to earn MonkeyBucks ($MB) by winning matches. Monkey NFTs can be purchased by taking part in the NFT drop scheduled for December 2021. The NFTs will include a limited quantity of Monkeys at the price of 2 SOL. Similarly, there will be an exclusive Stadium NFT drop later this year.</p><br/>
<p>What are the advantages of holding an original Monkey? Owning an original Monkey comes with perks such as an airdrop of game tokens, advancement of your player in a pre-game training camp, early breeding season, and early access to stadium (land) sales.</p><br/>
<p>The play-to-earn partnership between UniX Gaming and MonkeyBall will allow the active use of MonkeyBucks, the in-gaming currency powering the game economy. Players get $MBs by buying it on DEXs, opening loot boxes, completing missions, winning matches, watching games as spectators, or hosting games in their stadiums. What&rsquo;s more? Players can spend $MBs to breed new monkeys and purchase consumable game items in the game&rsquo;s store.</p><br/>
<p>Monkey Ball is being developed continually by a team of experts in multiple disciplines with experience in game design and development. The MonkeyBall team has designed games that have turned billions of dollars in revenue in the past 15 years.</p><br/>
<p>If you need more information and resources about MonkeyBall and the partnership with UniX Gaming, the NFTs, the in-game currency ($MBs), and the governance token ($SCORE), feel free to pay a visit to their&nbsp;<a href="https://monkey-ball.gitbook.io/monkey-ball/" target="_blank" rel="noopener">whitepaper</a>,&nbsp;<a href="https://www.monkeyball.com/" target="_blank" rel="noopener">website</a>,&nbsp;<a href="https://discord.com/invite/ubhDR2F5Kf" target="_blank" rel="noopener">Discord</a>, or&nbsp;<a href="https://twitter.com/monkeyballgame" target="_blank" rel="noopener">Twitter</a>&nbsp;handle.</p><br/>
`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX Gaming partners with MonkeyBall in a play-to-earn gaming strategy';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*TIUNgWEdNbZ2U3kezlXqBw.jpeg"
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
