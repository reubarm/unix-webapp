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
<p><span>The </span><a href="https://www.forbes.com/sites/robertfarrington/2021/12/13/play-to-earn-gaming-is-driving-nft-and-crypto-growth/?sh=3886ed11c2dc" target="_blank" rel="noopener">play-to-earn model of gaming has grown immensely over the past few years</a><span>.<br/><br/>Gamers aren&rsquo;t just looking to have fun and enjoy themselves anymore&ndash;they&rsquo;re looking to turn their skills and efforts into real monetary value. The idea of gaming for profit or as a profession has come up before in the form of eSports and sponsorships, but the idea of playing for both fun and profit has been mostly forgotten because people thought it would be impossible.</span></p>
<br/><p><span>But today, we&rsquo;re going to explain a little bit more about play-to-earn guilds and how things are changing for gamers that want to turn their skills into real money.</span></p>
<br/><h3>What is play-to-earn?</h3>
<p>Let&rsquo;s quickly explain what play-to-earn is.</p>
<p>Play-to-earn is a new business model for video games that focuses on adult audiences. When you play a game with this model, you&rsquo;re able to earn cryptocurrency or <a href="https://www.investopedia.com/non-fungible-tokens-nft-5115211" target="_blank" rel="noopener">non-fungible tokens</a> (NFTs) as rewards. Sometimes you&rsquo;ll earn them from random events in the game, or sometimes you can trade them with other players.</p>
<p>One of the most popular examples of this is Axie Infinity. This game has you building up a collection of &ldquo;Axies&rdquo; which can be used across a variety of different games. These can also be traded or bought, and they each give different kinds of benefits. You can also breed your Axies to create special ones which could be worth a lot of money. It&rsquo;s a bit like Pokemon but for adult audiences and with the possibility to earn real money.</p>
<br/><h3>What is a play-to-earn guild?</h3>
<p>A play-to-earn guild is essentially a large collection of players that enjoy play-to-earn gaming models. They&rsquo;re much like regular gaming guilds which gather people with like-minded interests and approaches to video games. However, the difference here is that everyone in a play-to-earn guild is in it to earn money and contribute to the guild. So here are some features about play-to-earn guilds that you should know.</p>
<br/><br/><h3>They have market caps</h3>
<p>Play-to-earn guilds stockpile many different assets in play-to-earn games. These are used for playing the game, for lending to other guild members, and for amassing wealth that can be used to trade with other guilds.</p>
<p>One of the largest crypto gaming guilds, <a href="https://coinmarketcap.com/currencies/yield-guild-games/" target="_blank" rel="noopener">Yield Guild Games, has an estimated market cap of over $393 million</a>. They offer opportunities to all gamers and they currently have over 4,700 members that are earning for the guild.</p>
<br/><h3>They&rsquo;re called scholars, not gamers</h3>
<p>One of the main differences in the crypto gaming community is that the players usually aren&rsquo;t referred to as gamers. Instead, they&rsquo;re known as scholars.</p>
<p>This is due to the relationship that crypto guild investors have with the players. Since they have expensive and powerful assets, they lease them to players, allowing them to progress further in the game and earn better rewards. They then split these savings, giving the scholars around 70% of the earnings while the remaining 30% goes to the guild and community managers.</p>
<br/><h3>How do play-to-earn guilds work?</h3>
<p>The concept of a play-to-earn guild is very simple.</p>
<ul>
<li>Investors purchase items and other gameplay assets in a play-to-earn game.</li>
<li>Guilds form which stockpiles their assets, creating a pool of in-game items that can be used to increase their earnings and rewards.</li>
<li>New members join the guild through scholarships. This means they&rsquo;re leased items and assets from the guild in order to play the game. Their earnings are then split between the guild, community managers, and the player.</li>
</ul>
<p>Guilds can also offer other services that are based around this concept of lending players in-game items and sharing the profits they earn. Some guilds offer rent-to-earn while others run a stake-to-earn program. With many different ways to earn in a crypto gaming guild, it&rsquo;s important to consider your options carefully.</p>
<br/><h3>Joining a crypto gaming guild</h3>
<p>So what are the benefits of a crypto gaming guild?</p>
<ul>
<li>Join a community of like-minded players that have the same aspirations that you do.</li>
<li>Work with investors in the crypto gaming space and receive scholarships that can help you progress in the game and earn more.</li>
<li>Team up with other scholars to maximize your earnings through team-oriented tasks.</li>
<li>Ask for advice or help when you&rsquo;ve reached a point where you can&rsquo;t progress or are having difficulties.</li>
<li>Approach play-to-earn with a more open mindset with the help of other players.</li>
<li>Take advantage of the massive growth that the play-to-earn space has been experiencing.</li>
<li>Get started with minimal investment thanks to the helpful people in gaming guilds.</li>
</ul>
<p>In short, joining a crypto gaming guild is a brilliant way to get started with play-to-earn video games. There are many guilds that you can join and each of them has unique communities that will certainly fit your preferences.</p>
<br/><h3>Are there downsides to a crypto gaming guild?</h3>
<p>As with most things in life, there are going to be downsides that you can&rsquo;t easily change. For example, what happens if a crypto game is suddenly shut down? While it&rsquo;s not likely to happen, there&rsquo;s nothing that prevents a game from just closing one day and never coming back. Most of your assets will be useless and you&rsquo;ll suddenly have a lot of players that aren&rsquo;t doing anything.</p>
<p>Another potential issue is that the value of NFTs can change wildly throughout the week. This is also based on the popularity and general reception surrounding the games that you&rsquo;re playing. In short, even though the play-to-earn model is gaining a lot of traction, they&rsquo;re still a relatively new concept and there&rsquo;s no telling what could happen. But with that said, it&rsquo;s very unlikely that a successful crypto game will shut down.</p>
<br/><h3>Conclusion</h3>
<p>Hopefully, this article has educated you about crypto gaming guilds and how play-to-earn works. Whether you&rsquo;re a curious investor or an excited future player, there&rsquo;s a lot of potential in this space that every gamer should pay attention to.</p>
`;

export default function BlogPost10() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'How Crypto PlayToEarn Guilds Work';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://images.unsplash.com/photo-1640187128454-1d7c462ede26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
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
