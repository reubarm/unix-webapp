import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// material
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

<br/><h3>Top 5 play to earn crypto games 2021</h3>
<p>Play and earn crypto games are taking the world by storm. Gamers love the fact that titles are finally rewarding them for all their hard work, beyond mere in-game prizes. In some cases, gamification is becoming a career!&nbsp;</p>
<p>In this post, we take a look at the top five play 2 earn currently on the market by <a href="https://coinmarketcap.com/view/play-to-earn/" target="_blank" rel="noopener">market cap</a>. (Please note that this list is subject to change, depending on user preferences and how each game&rsquo;s ecosystem develops in the future).</p>
<br/><h3>#1: Axie Infinity &ndash; $6.2 billion</h3>
<p>Axie Infinity is perhaps the most famous of all play 2 earn games. It&rsquo;s a Pok&eacute;mon-like title that involves battling cute creatures called Axies.&nbsp;</p>
<p>As a play and earn game, Axie Infinity allows gamers to buy and sell items, accessories, creatures they collect, flowers and barrels using tokens they collect. There are two types of token: Axie Infinity Shards which can be bought and sold on exchanges, and Small Love Potions (SLP), which reward players for spending time in the game.&nbsp;</p>
<p>The Shards are a type of governance token. These provide players with the power to determine the future direction of the title, instead of leaving it solely at the discretion of the developer. SLP is more about getting players to actually take part in the game and build a community. Like Shards, they too are sellable on various exchanges for other crypto assets.&nbsp;</p>
<p>To make money, the developer Sky Mavis takes a 4.25 percent cut of all trades, selling them on various exchanges to recoup real-world costs. Naturally, the price of SLP relates to the popularity of the game. The more players who join, the more valuable it&rsquo;ll become.&nbsp;</p>
<br/><h3>#2: Decentraland &ndash; $6.1 billion</h3>
<p>Decentraland is a blockchain-based virtual reality metaverse-type game first described in a white paper in 2017. It is now the second-most valuable game in its class, just behind Axie Infinity.&nbsp;</p>
<p>On the platform, users can buy, develop and sell virtual plots using NFTs. Each non-fungible token is analogous to a traditional property deed in the real world. Whoever owns it, also owns the piece of digital land.&nbsp;</p>
<p>Decentraland was inspired by author Neal Stephenson&rsquo;s <em>Snowcrash</em>. Users are able to connect, interact, create content and play games, all in the virtual environment. There is also a fully-functioning, blockchain-based economy that allows players to engage in myriad real-world transactions and monetize the content and apps they build.&nbsp;</p>
<p>Again, there is no centralized developer calling the shots, as there is in games like Second Life. Instead, communities build organically, without direction from outside authorities.&nbsp;</p>
<br/><h3>#3: The Sandbox &ndash; $4.6 billion</h3>
<p>The Sandbox &ndash; now worth an eye-watering $4.6 billion &ndash; is a blockchain-based, decentralized community where creators can sell voxel art on the Ethereum blockchain. The game comprises three main parts: a developer screen (VoxEdit), Marketplace and the Game Maker. VoxEdit works in a similar way to traditional 3D modelling software. Creators use digital tools to create beautiful three-dimensional objects that they believe other players may value in-game. They then use NFT technology to set the supply and sell their creations on the marketplace.&nbsp;</p>
<p>You can imagine how a setup like this would benefit creators and create value among players. Gamers would naturally seek out items because of their rarity or beauty, paying more to their designers. Famous or popular creators could also restrict supply of NFTs to maximize their own earnings and create publicity. Selling creations for thousands of dollars at a time could supercharge interest in the community and pad out their bank balances.&nbsp;</p>
<p>The Sandbox also allows artists and players to create &ldquo;experiences.&rdquo; These could include individual games, art galleries, dioramas and more. They can develop these through the &ldquo;game maker&rdquo; &ndash; software that allows players to build, share and monetize their gaming creations on The Sandbox 3D gaming platform.&nbsp;</p>
<p>LAND is the basic Sandbox unit of account. Players can buy or sell digital real estate from each other. Each plot is <a href="https://medium.com/sandbox-game/what-is-the-sandbox-850de68d893e" target="_blank" rel="noopener">96 by 96 meters</a> and a standard size, making them manageable for a single person.&nbsp;</p>
<p>SAND is the main utility token on the Sandbox Platform, allowing players to play games Binance style. Available on the exchange, this ERC-20 utility token will serve as the main tool for transactions on the platform. Interestingly, SAND will enable players to generate passive income from LANDs &ndash; that is, rents &ndash; giving SAND a bona fide capital market.&nbsp;</p>
<br/><h3>#4: Gala &ndash; $3.7 billion</h3>
<p>Gala play and earn games have shot up enormously in value <a href="https://www.fool.com/the-ascent/cryptocurrency/articles/why-gala-gala-is-up-over-34200-this-year/" target="_blank" rel="noopener">over the last year</a>, and it is now the fourth most valuable &ldquo;play earn repeat&rdquo; game in the world by play to earn Coinmarketcap. It&rsquo;s goal, it says, is to create a range of play to earn apps that people actually want to interact with.&nbsp;</p>
<p>Gala&rsquo;s success is being driven by the growth of metaverses, particularly because of the success of other play to earn games 2021, such as Axie Infinity. The company&rsquo;s flagship play 2 earn crypto game is Town Star. Players can buy Town Star Nodes and earn extra rewards for the part they play in powering the game.&nbsp;</p>
<p>Gala is proving exceptionally popular because it is community-led. Players get a say in the direction development takes. However, this is also a risk: existing players may create a game that makes it hard for the platform to continue growing in popularity.&nbsp;</p>
<br/><h3>#5: WAX &ndash; $1 billion</h3>
<p>WAX is one of the world&rsquo;s leading decentralized entertainment and video gaming networks. It wants to make it easy to play and win cryptocurrency. On WAX, players earn NFTs that allow them to take ownership of the titles they may. What&rsquo;s more, the developers say, getting your foot in the door and earning NFTs is relatively easy. You don&rsquo;t have to dedicate years of your life to the cause.&nbsp;</p>
<p>WAX offers a host of games for practically every type of gamer. These include Farmers World, Alien World, Farming Tales, R Planet, Nova Rally and more. Wax promises gamers low transaction fees and ease-of-use when adopting the play earn model.&nbsp;</p>

`;

export default function BlogPost1() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'Top 5 play to earn crypto games 2021';

  return (
    <Page title="Top 5 play to earn crypto games 2021">
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title="Top 5 play to earn crypto games 2021"
            sx={{ textAlign: 'center' }}
            image="https://images.pexels.com/photos/159204/game-controller-joystick-joypad-gamepad-159204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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

          <div style={{ padding: '0 50px', maxWidth: '850px', margin: '0 auto' }}>
            <Markdown children={POST_BODY} />
          </div>
        </Card>
      </Container>
    </Page>
  );
}
