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
<p>UniX Gaming is very excited to bring our first Treasury Update to our community, investors, and token holders!</p><br/>
<p>The team has been working tirelessly behind the scenes on fulfilling our roadmap. We hope this Treasury Update will give you confidence that we are doing everything to deliver on these projects. As you are all well aware, the crypto market has been looking ugly the past couple of weeks, but we firmly believe that the direction and roadmap of UniX Gaming will enable it to come out of this period of downward market pressure with greater strength than before.</p><br/>
<br/><h3>Scholarships and Community Update</h3>
<p>From November 2021 to January 2021, we have grown our Axie Infinity scholar pool from 1,008 to 4,600 scholars (as of January 31st 2022). We have also expanded our community leadersahip team to a squad of 62 team leaders, 13 recruiters, 40 trainers and 54 other specialised leaders overseeing the departments and community &mdash; made up of our most committed and talented scholars. We recognise that the successful expansion of this leadership team is critical to ensure our Guild remains a prestigious and fun community to be a part of.</p><br/>
<p>During this same period, we have also hosted the following community events for our scholars:</p><br/>
<ul>
<li><strong>Halloween Poster Making Contest, Halloween Spoken Poetry Battle, Halloween Spooky Stories, Halloween Cosplay Competition &mdash; November 2021:</strong>&nbsp;Organisers and leaders selected the Best Performer per category based on set criteria, and winners received cash as prizes. We had a total of 52 members participate and hundreds of viewers online.</li>
<li><strong>Event for a Cause &mdash; December 2021:</strong>&nbsp;Our scholar community sits at the heart of UniX Gaming, and as such, when Super Typhoon Rai hit the Philippines&rsquo; south-eastern islands on December 16th 2021. Our executive management team and community leaders leapt into action to provide fast relief to the communities affected in the Philippines. Prizes for any events that had to be cancelled were used to help the community members affected by the typhoon.</li>
<li><strong>UniX Got Talent &mdash; January 2022:</strong>&nbsp;This was a fun and entertaining event for the community that aimed to encourage members to showcase their talents.</li>
</ul>
<p>Over the next three months, we aim to provide more gaming opportunities to our scholars by setting them up with as many quality P2E scholarship-enabled games as possible. Axie Infinity has paved the way with its revolutionary scholarship model. We aim to support our current and future scholars by offering a variety of games to suit our scholars&rsquo; styles and talents. Already, we have 50 scholars playing Rising Sun, and 100 scholars have been selected to play Starsharks. We will soon be introducing 100 scholars to Pegaxy, 40 scholars to Block Ape Scissors, 50 scholars to Idle Mystic and a further 100 scholars to Placewar (to name a few).</p><br/>
<p>Our long-term scholarship growth target is 10,000 scholars. Still, we are allowing more time for our scholar pool to grow organically (once we hit a stable pool of 5,000 scholars) to ensure that our scholar team can be monitored and maintained based on minimum performance standards. The training and leadership team tracks gameplay results closely to ensure that our NFT assets are loaned to the right scholar to maximise earnings for both the scholar and UniX Gaming.</p><br/>
<br/><h3>Treasury Overview</h3>
<p>In November 2021, we raised over $30M through Copperlaunch and seed/private sale rounds. Since then, approximately $7M has been allocated to exchanges and providing liquidity, $5M has been spent on scholarships, $3M on treasury management strategies, $2M on asset investments, $1M has been spent on marketing, and $0.5M on buybacks.</p><br/>
<p>Our current Treasury balances are outlined in the tables below. A list of all our wallet addresses has also been included at the bottom of this update. Please note that we have not included any UNIX balances below as UNIX tokens would not be used for investment purposes.</p><br/>
<br/><h3>Key Investments Commentary</h3>
<ul>
<li><strong>Axie Infinity:&nbsp;</strong>Despite the current market, Axie Infinity still has a lot of potential with Origins V2 and Lunacia Land Gameplay that are yet to be released. We aim to be an ecosystem builder for Axie Infinity to ensure that UniX Gaming will have an everlasting presence in the Axie Infinity Metaverse.</li>
<li><strong>Big time:&nbsp;</strong>&ldquo;AAA&rdquo; title developed and managed by a team with vast experience from the traditional gaming industry. Time Spaces (which we have purchased) are the only ways to craft items/objects when the game goes live. The Time Spaces are crucial to the ecosystem of Big Time and have massive potential.</li>
<li><strong>Adanimal:&nbsp;</strong>This will be the first game on Cardano and allows players to play various games with their (one) pet &mdash; we see this as an exciting and potentially addictive concept. The game has unique NFTs and strong Tokenomics.</li>
<li><strong>Monkeyball:&nbsp;</strong>This game has gained major traction through its huge PR campaign and excellent marketing strategy. It is the first crypto football game to be released and the first big monkey Solana game. Crypto Banter has been a major supporter of this project.</li>
<li><strong>Mutant Ape Yacht Club (MAYC) NFTs:&nbsp;</strong>The MAYC community is a part of the exclusive BAYC community. UniX Gaming will create some amazing partnerships with other members of BAYC, which will benefit UNIX holders through future projects.</li>
<li><strong>NeoTokyo NFTs:&nbsp;</strong>The Neo Tokyo project also has an exclusive and insightful community. UniX Gaming looks to establish a core relationship with the other citizens of the NeoTokyo Metaverse. It is founded by our investor Alex Becker and his partner Ellio Trades. We are looking forward to a partnership with their Esport events hosts, Arbiters.</li>
<li><strong>Sidus:&nbsp;</strong>This is potentially a &ldquo;AAA&rdquo; game with an incredible economic model. It is similar in complexity to Eve Online. The game has great VCs onboard and social media backing (e.g. Alameda, Polygon, LD, Ellio, Becker).</li>
<li><strong>Sipher:&nbsp;</strong>This MOBA game has strong backing, a quality team, impressive artwork, and a game trailer.</li>
<li><strong>Starsharks:&nbsp;</strong>This project has excellent links to Binance and an experienced development team with a great understanding of how to challenge Axie. So far, it has been an excellent investment for both UniX and our scholars.</li>
<li><strong>Syn City:</strong>&nbsp;This game will be the first big Mafia-type game on the blockchain and has first-class investors including Ellio, Becker, KSI, Do-Kwan founder of Luna, Animoca, and Spartan. They have an interesting economic model with big plans for the future.</li>
</ul>
<br/><h3>Future Use of Funds</h3>
<p>Outside of operational and business-as-usual &ldquo;coinflows&rdquo; associated with running UniX Gaming, funds of the Treasury are being invested into numerous projects.</p><br/>
<ul>
<li><strong>The &ldquo;Final Round&rdquo; Launchpad:</strong>&nbsp;Our developers are working on a dedicated launchpad for gaming projects aiming to release 2 &ldquo;AAA&rsquo;&rsquo; titles each month. Projects launched on the launchpad will have support from our community and our streamers (who have a combined following of 10 million subscribers). Games are also supported by UniX&rsquo;s Esports ecosystem, where 20 (initial) incubated Esports teams will be actively playing their game. The launchpad will be multi-chain, and we are looking to have the first launchpad on the Ronin Chain (Sky Mavis). The first version of the launchpad is a standard design with an upgraded version soon to follow with additional features. There will be a unique tier system based on UNIX token holdings. The five other functionalities the launchpad will aim to facilitate include allocations, staking, DAO support, marketplaces, and metadrops.</li>
<li><strong>&ldquo;1MHz Studios&rdquo; (Gaming Studio):</strong>&nbsp;UniX Gaming has partnered with a traditional gaming studio to create 1MHz Studios and will be focusing on developing play-and-earn games for UniX (2 games to be announced where UNIX is the native Token) as well as other GameFi projects. The teams specialise in Unreal Engine 4 and 5 and Full Stack Blockchain Development. The studio&rsquo;s niche will be building inside metaverses such as The Sandbox.</li>
<li><strong>&ldquo;ESES&rdquo; (Esports Ecosystem):</strong>&nbsp;This will be the first Esports League to combine traditional and play-to-earn titles. The League will initially start with 20 teams and scale to 50 teams. UniX will incubate these teams (through compensation, marketing and sponsorships) to cultivate professional Esports players and coaches. The ESES is another marketing tool that will promote projects that partner with UniX Gaming.</li>
<li><strong>&ldquo;UniXVersity&rdquo; (Learn-and-Earn Platform):</strong>&nbsp;The purpose of the UniXVersity joint venture is to build a coin-based global university and economy that will work towards digitalising world-class education and making it affordable for all. Our partner Guide Education will offer educational content, consisting of its English, Math, and Science catalogue. UniX will offer financial backing and incentivise the learning process by integrating a token-based Learn-and-Earn system into the platform.</li>
<li><strong>Further CEX Listings:</strong>&nbsp;We aim to provide greater liquidity to all token holders by listing on several more CEXs during 2022. The amount provided for liquidity may vary between exchanges.</li>
<li><strong>Polygon Liquidity:</strong>&nbsp;We aim to provide ongoing liquidity to support current token holders and enable adoption/ investment from new token holders.</li>
<li><strong>P2E NFTs:</strong>&nbsp;We aim to continue investing in quality P2E in-game NFTs to support the variety of scholarship games we can offer to our community. Our R&amp;D team performs detailed due diligence on up-and-coming titles to assess the ecosystems of new games, the market&rsquo;s potential adoption, and ensure the longevity of our Guild&rsquo;s presence and growth in that particular metaverse.</li>
<li><strong>Marketing:</strong>&nbsp;We will continue to allocate funds to build the UniX Gaming brand and spread the word on the significant milestones we have planned for 2022.</li>
<li><strong>Other UniXverse Projects:</strong>&nbsp;Several other exciting UniXverse ecosystem projects are in the pipeline for 2022/2023 and will be announced soon.</li>
</ul><br/>
<p><em>Disclaimer: the projects discussed in this article are still being developed, and the actual mechanics/functionality may be subject to change as each project progresses. Tokens listed above include unvested tokens that are under a SAFT. The NFTs listed above do not include NFTs that scholars are currently using.</em></p><br/>
<p><strong>Wallet Addresses</strong></p><br/>
<p><a href="https://etherscan.io/address/0x818c3e5f0fB69bdf5f49F15Fb29B7Ac6D3d159D0" target="_blank" rel="noopener">https://etherscan.io/address/0x818c3e5f0fB69bdf5f49F15Fb29B7Ac6D3d159D0</a></p><br/>
<p><a href="https://etherscan.io/address/0x9C97f057865F918FcDA517Ea616C0EfD4f975167" target="_blank" rel="noopener">https://etherscan.io/address/0x9C97f057865F918FcDA517Ea616C0EfD4f975167</a></p><br/>
<p><a href="https://etherscan.io/address/0x773F303fDF2b44Ade231356c8Ce4ce2E42429556" target="_blank" rel="noopener">https://etherscan.io/address/0x773F303fDF2b44Ade231356c8Ce4ce2E42429556</a></p><br/>
<p><a href="https://etherscan.io/address/0x13220bbd4b286bfbaf20363632bc384ba3e4e309" target="_blank" rel="noopener">https://etherscan.io/address/0x13220bbd4b286bfbaf20363632bc384ba3e4e309</a></p><br/>
<p><a href="https://etherscan.io/address/0x584f75afe44bbc990a0d930dcd6bb5e65574dcef" target="_blank" rel="noopener">https://etherscan.io/address/0x584f75afe44bbc990a0d930dcd6bb5e65574dcef</a></p><br/>
<p><a href="https://etherscan.io/address/0xBA662d4b802B703297d6E5f9Ca0E4F10bdc600b5" target="_blank" rel="noopener">https://etherscan.io/address/0xBA662d4b802B703297d6E5f9Ca0E4F10bdc600b5</a></p><br/>
<p><a href="https://solscan.io/account/7P9RWrn1pYzPUHBdQjRtJ5X8qnDX2Y8qHTRhJC1Wfbbv" target="_blank" rel="noopener">https://solscan.io/account/7P9RWrn1pYzPUHBdQjRtJ5X8qnDX2Y8qHTRhJC1Wfbbv</a></p><br/>
<p><a href="https://bscscan.com/address/0x773F303fDF2b44Ade231356c8Ce4ce2E42429556" target="_blank" rel="noopener">https://bscscan.com/address/0x773F303fDF2b44Ade231356c8Ce4ce2E42429556</a></p><br/>

`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'January 2022 Treasury Update';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/0*qjYH3nPaFU2aQmFb"
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
