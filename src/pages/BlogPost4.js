import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
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

<br/><h3>How crypto gaming works</h3>
<p>Imagine being able to sit down at one of your favorite games and use it to make a living. It sounds impossible, but thanks to crypto games 2021, it&rsquo;s already a reality. PC, IoS, and android crypto games 2022 promise to reward players for their in-game efforts and give them more control over future development directions of the titles they play.</p>
<p>&ldquo;Play to earn&rdquo; is a concept right at the center of popular crypto games like Axie Infinity. It shifts the paradigm from the traditional model where players pay developers into one in which they earn money for themselves. Just a few months ago, using crypto games to earn money would have seemed like make-believe, but it is happening, and in a big way. Now the entire gaming industry is talking about it, and, from what we can tell, it appears to be the future.&nbsp;</p>
<p>In this post, we take a look at how crypto games for PC, Android, iOS and other platforms work, and how you can get on the bandwagon.&nbsp;</p>
<br/><h3>What does play to earn mean?</h3>
<p>Play to earn pretty much means what it sounds like: you play games and earn rewards with value outside of the gaming environment. Players trade the tokens they acquire through their gaming activities for cryptocurrencies and other assets they can use in the real world.&nbsp;</p>
<p>The entire gaming industry is excited about the development. NFTs &ndash; non-fungible tokens &ndash; effectively assign property rights in the digital space, giving players ownership over particular assets on the blockchain, allowing them to collect and then resell.&nbsp;</p>
<br/><h3>When did play to earn get started?&nbsp;</h3>
<p>The blockchain-powered play to earn model really got going in the Philippines during the COVID-19 pandemic. Out of work and with the tourism industry in tatters, many Filipinos turned to online crypto games for iPhone to get the money they needed to buy food. Amazingly, many of these players discovered that they could actually earn more than through their conventional jobs, with many replacing them outright.&nbsp;</p>
<p>Axie Infinity &ndash; currently the biggest crypto game by market cap &ndash; was the most popular. Players found that they could earn up to $250 per day, simply selling earned tokens on public exchanges.&nbsp;</p>
<br/><h3>How does play to earn work?&nbsp;</h3>
<p>Under the conventional economic model, gamers pay developers a fee and, in exchange, get access to game software. The net cost to the player is zero(with the exception of the upfront price of access to the game).&nbsp;</p>
<p>In the last decade, developers introduced the controversial freemium model. Under this paradigm, players get access to the game for free, but must then pay for the things that they need to complete the game in a reasonable length of time. Most games force players to hand over cash, leading to a net cost to the player. They lose money, regardless of the contributions they make to the game and its community.&nbsp;</p>
<p>Crypto games on Android, IoS and other platforms work differently. Here, the ecosystem rewards players for the value they contribute to the rest of the game&rsquo;s community. The more they bring to the table, the more money they can earn.&nbsp;</p>
<p>According to industry experts, this paradigm is groundbreaking. It will usher in a new metaverse that isn&rsquo;t just people playing games but a whole new economy. It could even be the future of work &ndash; people getting paid for their activities in the metaverse.&nbsp;</p>
<p>In general, free and paid crypto games reward players in two ways:&nbsp;</p>
<ol>
<li>For their digital creations</li>
<li>For the hours they contribute to the gaming community</li>
</ol>
<p>Axie Infinity, for instance, offers <a href="https://cryptobuyingtips.com/guides/how-to-buy-small-love-potion-slp" target="_blank" rel="noopener">Small Love Potions (SLPs)</a>. Players can use these coins to breed new digital pets (called Axies), or sell them on conventional exchanges for other types of crypto or conventional assets.&nbsp;</p>
<p>Another game, The Sandbox, uses Ethereum-powered blockchain NFTs to reward players for their voxel art creations. Users construct in-game items using the VoxEditor and then sell them to other members of the community via the Marketplace. Blockchain ensures the collectability of all these items, making them impossible to duplicate. The more beautiful the creation or more famous the creator, the higher the price they can get. As with Axie Infinity, players can then sell the tokens they earn for other types of money.&nbsp;</p>
<p>Some crypto games for Android use a third method for earning money called &ldquo;staking.&rdquo; This approach allows gamers to lock up their NFTs in the form of contracts, earning rewards through time. Staking, like conventional capital investments, requires large upfront deposits. But with properly formulated blockchain-based contracts, players can earn a substantial remuneration over time.&nbsp;</p>
<br/><h3>Why are play-to-earn games secure on blockchain?&nbsp;</h3>
<p>Play to earn games aren&rsquo;t actually anything new. MMORPGs have been implementing such models for more than two decades. However, blockchain fundamentally changes the dynamic for players. Developers can no longer wade in and manipulate the price of certain items. Instead, they&rsquo;re set by the interactions of players in a free market.&nbsp;</p>
<p>It&rsquo;s possible because the blockchain is an immutable ledger that records all transactions and who owns what. No single person on the network can change any of the entries, without the permission of the other participants. Thus, developers can no longer rig in-game economies. Instead, prices are set by players.</p>
<p>What&rsquo;s more, because blockchain platforms, such as Ethereum, use open protocols, it is possible for gamers to trade NFTs and tokens independently of the games themselves. In a sense, these items are like parallel structures that run alongside the digital world, forming a bridge to the real world.&nbsp;</p>
<br/><h3>How much can you earn?</h3>
<p>Games aren&rsquo;t known for making people rich. However, the rewards are substantial. Axie Infinity players are known to make around <a href="https://academy.binance.com/en/articles/what-is-play-to-earn-and-how-to-cash-out" target="_blank" rel="noopener">$200 to $1,000</a> per month on the platform. And while, by Western standards, that might not sound like a lot, it is a huge amount for people living in developing parts of the world, such as the Philippines.&nbsp;</p>
<br/><h3>Summing up</h3>
<p>Getting in on crypto gaming early is a good policy. The sooner you start, the more likely you are to ride the emerging wave. However, be careful with the games you choose to play. Not all have the same robust model and tokenization approach as Axie Infinity. Some are exceptionally high risk.</p>
`;

export default function BlogPost4() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'How crypto gaming works';

  return (
    <Page title="How crypto gaming works">
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title="How crypto gaming works"
            sx={{ textAlign: 'center' }}
            image="https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />

          <div
            style={{
              width: '300px',
              margin: '50px auto',
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
          </div>

          <div style={{ padding: '50px', maxWidth: '850px', margin: '0 auto' }}>
            <Markdown children={POST_BODY} />
          </div>
        </Card>
      </Container>
    </Page>
  );
}
