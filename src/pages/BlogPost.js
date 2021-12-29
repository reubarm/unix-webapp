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

<p>We&nbsp;<a href="https://unixgaming.org/" rel="noopener ugc nofollow" target="_blank">@UniXGaming</a>&nbsp;proudly want to thank our early supporters and investors for the amazing achievements they have made so far. We feel very grateful to have our well-chosen partners on board who can help create a more accessible space, sharing a long-term vision to conquer the Metaverse industry as a strong alliance together. UniX has had amazing success so far and we have already completed our $10 million target raise &mdash; $8 million from their private sale and over $22 million on Copper Launch.</p>
<br/>
<p>UniX Gaming has&nbsp;a&nbsp;number of strong backers such as LD Capital and AU21 &mdash; two of the largest investors in the Metaverse space. LD was an early investor in Big Time, Star Atlas, and ImmutableX, and AU21 was an early investor in Axie Infinity, Chainguardians, Splinterlands and ThetanArena.</p>
<br/>
<p>In addition to these, we also have investment from Akash Network, Pluto Digital, Master Ventures, Synergia Capital, Akatsuki Inc, Paid Network, Scrypt, Banter Capital, Argo Blockchain, Base Two, Unvest, The Club, Guide Education, and Tuition Kit &mdash; more details on these are below.</p>

<p>We are proud of our strong advisory team who have supported us all the way through to our current stage and will continue to help us grow further. We could not be more thrilled to have Kyle Chase, Eka Darville, Norman Wooding, Sylvan Martin, Tobias Sperrin, the Professor and Maziar Sadri, alongside our friends, Crypto Banter, and supporters of our project Alex Becker, and Cameron Fous.</p>

<br/><br/><h3><strong>Fair Launch</strong></h3>

<p>UniX Gaming finished their launch on the&nbsp;<a href="https://copperlaunch.com/auctions/0x6d68d7b0ca469bd1171f81a895e649d86d523c20" rel="noopener ugc nofollow" target="_blank">Copperlaunch Auction &ldquo;BLPB</a>&nbsp;on the 26th November and now $UNIX will be listed on Uniswap where the $UNIX journey continues and is live to the public.</p>

<br/><br/><h3><strong>Staking</strong></h3>

<p>UniX Token holders will be able to take advantage of the our Staking &amp; Farming rewards which will be enabled shortly after the launch. More information will follow in due course, so please follow our&nbsp;<a href="https://t.me/unix_token" rel="noopener ugc nofollow" target="_blank">UniX Token telegram</a>&nbsp;community for exclusive news and updates about the UniX play-to-earn revolution.</p>

<br/><br/><h3><strong>It&rsquo;s Time to Build</strong></h3>

<p>We at UniX Gaming will focus on building on our Roadmap and expanding our core business &mdash; &ldquo;the Community&rdquo;. With the anticipated results of our current fair launch, UniX Gaming is aiming to reach 10K Scholars by Q1 22, which would earn a minimum estimated gross SLP Return of $1.2M monthly. UniX will also be investing into a large quantity of in-game NFT&rsquo;s for Yield Generation and scholar use, an example being our partnership with&nbsp;<a href="https://medium.com/@UniXgaming?p=90cb6ffec53c" rel="noopener">Big Time Studio</a>. We are quite confident that these milestones can be achieved with the current raise.</p>

<p>UniX Gaming is excited to start working on its YouTube presence where the Game Streaming Range currently has 400k followers across all of UniX&rsquo;s Streamers. We are targeting to grow this to 2M followers by the end of Q1 22.</p>

<p>One of our main focuses will be on our partnerships within the gaming space that can offer UniX Community additional services and support new projects that have strong infrastructure and visibility. Our top R&amp;D team will be analysing and giving insightful knowledge on the latest trending play-to-earn games. We will educate the community by providing them the best strategy to maximise their potential for all new games. There will also be a learn-to-earn education channel called &ldquo;UniXVersity&rdquo;, this is a free education offering for people in developing countries who do not have access to this type of resource, this certainly will be the first of its kind!</p>

<p>Our IGO Launchpad will onboard new gaming companies, where UniX Gaming will endeavour to use our knowledge and community to help them grow rapidly and successfully with all fundamental elements in mind: &ldquo;Players, Streaming, Marketing and Community Building&rdquo;. UniX Gaming believes in creating lifelong successful partnerships for the Metaverse future.</p>

<p>UniX Gaming is looking to add increased utilities for the DAO and Community, whilst continuously trying to build on expanding in the Metaverse and hitting their milestones on the roadmap.</p>

<br/><br/><h3>Who our Partners are</h3>

<ul>
	<li><a href="https://twitter.com/LD_Capital?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noopener ugc nofollow" target="_blank"><strong>LD Capital</strong></a><strong>:&nbsp;</strong>LD Capital is a leading investment firm based in China that is focused on blockchain investment, securities, equity investment, and trading. LD Capital has invested in more than 200 companies, multiplying its returns 100-fold. It invests in over $100 billion of assets and has self-owned assets of $1 billion.</li>
	<li><a href="https://twitter.com/bantercap?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noopener ugc nofollow" target="_blank"><strong>Banter Capital</strong></a><strong>:&nbsp;</strong>Banter Capital identifies and supports new crypto projects that have potential to succeed and serves as the venture capital arm associated with the&nbsp;<a href="https://www.youtube.com/channel/UCN9Nj4tjXbVTLYWN0EKly_Q" rel="noopener ugc nofollow" target="_blank">Crypto Banter</a>&nbsp;social news platform (<a href="https://www.youtube.com/channel/UCN9Nj4tjXbVTLYWN0EKly_Q" rel="noopener ugc nofollow" target="_blank">480,000+ YouTube subscribers</a>), led by&nbsp;<a href="https://twitter.com/cryptomanran" rel="noopener ugc nofollow" target="_blank">Ran Neuner.</a></li>
	<li><a href="https://aktsk.jp/en/" rel="noopener ugc nofollow" target="_blank"><strong>Akatsuki</strong></a><strong>:&nbsp;</strong>Akatsuki, Akatsuki, which was established in 2010, has developed dozens of mobile games. Akatsuki will be critical to helping UniX Gaming launch its own game, &ldquo;Unity&rdquo;, which is currently in its early stages of development. Akatsuki is listed on the Tokyo Stock Exchange and has some overseas branches. The company&rsquo;s revenue surpassed $300 million last year. Akatsuki in 2017 launched the &ldquo;Akatsuki Entertainment Technology Fund&rdquo; to support entrepreneurs that combine entertainment and technology.</li>
	<li><a href="https://twitter.com/AU21Capital" rel="noopener ugc nofollow" target="_blank"><strong>AU21</strong></a><strong>:&nbsp;</strong>AU21 Capital was founded by Chandler Guo and&nbsp;<a href="https://twitter.com/macrokenzi" rel="noopener ugc nofollow" target="_blank">Kenzi Wang</a>&nbsp;in 2017 with the mission of backing the most promising blockchain entrepreneurs, and providing founders with resources and connections to succeed.</li>
	<li><a href="https://argoblockchain.com/" rel="noopener ugc nofollow" target="_blank"><strong>Argo Blockchain</strong></a><strong>:&nbsp;</strong>the Nasdaq &amp; LSE listed company are committed to powering the blockchain technology as it continues to grow and influence our global economy.</li>
	<li><a href="https://synergia.fund/" rel="noopener ugc nofollow" target="_blank"><strong>Synergia</strong></a><strong>:&nbsp;</strong>Synergia Capital is a thesis-driven investment firm that applies quantitative asset management to digital assets. They take a risk-based approach to decentralized finance (DeFi) asset management, aiming to generate stable and substantial returns while preserving capital. They manage several quantitative strategies in public crypto markets. They have also launched a venture strategy with the mission of seeding and enabling the most promising blockchain entrepreneurs. We seek to back exceptional founders, leveraging our market expertise, network, and resources to optimize for their success.&nbsp;<a href="https://synergia.fund/our-team/" rel="noopener ugc nofollow" target="_blank">Their team&nbsp;</a>combines deep digital assets expertise spanning DeFi asset management, venture capital, prime brokerage, and smart contract security.</li>
	<li><a href="https://twitter.com/Pluto_Digital?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noopener ugc nofollow" target="_blank"><strong>Pluto Digital</strong></a><strong>:&nbsp;</strong>Pluto Digital PLC is a crypto technology and operations company that makes Web 3.0 Decentralised Finance (DeFi) more accessible to all. Pluto&rsquo;s mission is to make DeFi more accessible to everyone.</li>
	<li><a href="https://twitter.com/sl2capital" rel="noopener ugc nofollow" target="_blank"><strong>SL2 Capital</strong></a><strong>:&nbsp;</strong>SL2 invests across all stages and sectors, with a focus on Web 3.0 and distributed ledger technology.</li>
	<li><a href="https://twitter.com/master_ventures" rel="noopener ugc nofollow" target="_blank"><strong>Master Ventures</strong></a><strong>:&nbsp;</strong>Master Ventures is a blockchain-focused Venture Studio building the next generation of infrastructure companies to drive blockchain adoption. Notable investments include Coinbase, Kraken, Bitstamp, and Ripple amongst many others.</li>
	<li><a href="https://twitter.com/TuitionKit" rel="noopener ugc nofollow" target="_blank"><strong>Tuition Kit</strong></a><strong>:&nbsp;</strong>Tuition Kit creates a range of learning, development, and guide-powered products that are used nationally and internationally by hundreds of institutions including Loughborough College and Royal Free Hospital Children&rsquo;s School.</li>
	<li><a href="https://twitter.com/GuideEducation_" rel="noopener ugc nofollow" target="_blank"><strong>Guide Education</strong></a><strong>:&nbsp;</strong>Guide Education creates products that support lifelong learning in any industry and at any age. They will be working alongside us at UniX to help create our revolutionary education platform.</li>
	<li><a href="https://twitter.com/paid_network" rel="noopener ugc nofollow" target="_blank"><strong>PAID</strong></a><strong>:&nbsp;</strong>PAID Network is an ecosystem DAPP that leverages blockchain technology to deliver DeFi powered SMART Agreements to make business exponentially more efficient. It is also a launchpad and has released a variety of groundbreaking projects including Aioz, Splyt, and Shadows.</li>
	<li><a href="https://twitter.com/unvest_io" rel="noopener ugc nofollow" target="_blank"><strong>Unvest</strong></a><strong>:&nbsp;</strong>Unvest is the open multi-chain DeFi protocol for trading locked tokens. Free, fully customizable Vesting and Distribution for project owners.</li>
	<li><a href="https://twitter.com/akashnet_" rel="noopener ugc nofollow" target="_blank"><strong>Akash</strong></a><strong>:&nbsp;</strong>Akash Network is the world&rsquo;s first open-source cloud. They have created a system that is censorship-resistant, permissionless, and self-sovereign, and set to change how the world stores its data.</li>
	<li><a href="https://twitter.com/ZssBecker" rel="noopener ugc nofollow" target="_blank"><strong>Alex Becker</strong></a><strong>:&nbsp;</strong>Alex Becker is an American entrepreneur, author, and speaker, who is well-known as the powerful entrepreneur behind successful brands like&nbsp;<a href="https://www.source-wave.com/" rel="noopener ugc nofollow" target="_blank">Source Wave</a>&nbsp;and&nbsp;<a href="https://markethero.io/" rel="noopener ugc nofollow" target="_blank">Market Hero</a>. He is also known for his YouTube videos and Shopify training programs, where he teaches about entrepreneurship and marketing and he has a significant following in the crypto space.</li>
	<li><a href="https://twitter.com/ekadarville" rel="noopener ugc nofollow" target="_blank"><strong>Eka Darville</strong></a><strong>:&nbsp;</strong>After 14+ years working at the highest levels in Hollywood, Eka&rsquo;s unique skill-set sits at the intersection of business and creativity. The rise of NFT&rsquo;s saw these two worlds come together in spectacular fashion. As a long time Bitcoin advocate and self-described freedom maximalist, Eka was primed to be an early mover in the space. Eka&rsquo;s core passion is leveraging NFT&rsquo;s and blockchain technology to empower artists, creators and the financially excluded. (Netflix. Marvel. Disney.)</li>
	<li><a href="https://twitter.com/TheMoonCarl" rel="noopener ugc nofollow" target="_blank"><strong>Carl The Moon</strong></a><strong>:&nbsp;</strong>Carl Eric Martin, who is better known as&nbsp;<a href="http://www.youtube.com/channel/UCc4Rz_T9Sb1w5rqqo9pL1Og" rel="noopener ugc nofollow" target="_blank">The Moon Carl</a>, was only 24 years old when he started posting daily Bitcoin videos. Now with over half a million subscribers on YouTube, he is one of the most knowledgeable and experienced influencers in the cryptocurrency space.</li>
	<li><a href="https://6kstarter.com/" rel="noopener ugc nofollow" target="_blank"><strong>6K Starter</strong></a><strong>:&nbsp;</strong>Professional angel investor group and community builders in the Cryptoverse. They are passionate about investing in companies and projects that are contributing to the adoption of cryptocurrency.</li>
	<li><a href="https://staratlas.club/" rel="noopener ugc nofollow" target="_blank"><strong>The Club</strong></a><strong>:&nbsp;</strong>The Club Guild is also a Play To Earn guild that is aiming for the stars and its members are pioneers of the Star Atlas Metaverse and Play-To-Earn gaming space.</li>
	<li><a href="https://basetwo.com/" rel="noopener ugc nofollow" target="_blank"><strong>BaseTwo</strong></a><strong>:&nbsp;</strong>BaseTwo Capital is a Cayman Islands based fund focused on providing an institutional grade investment vehicle for digital assets.</li>
	<li><a href="https://twitter.com/Scrypt_Swiss" rel="noopener ugc nofollow" target="_blank"><strong>Scrypt</strong></a><strong>:&nbsp;</strong>Scrypt is a crypto asset management firm and a pioneer in the institutional adoption of digital assets. Scrypt also builds innovative investment products, from systematic arbitrage, alternative income, and high growth strategies with correlation to other asset classes.</li>
	<li><a href="https://twitter.com/The_Yogi_Lab" rel="noopener ugc nofollow" target="_blank"><strong>Yogilab</strong></a><strong>:&nbsp;</strong>Yogilab combines the worlds of business and spirituality in one place to encourage positive change both individually and within society at large.</li>
</ul>
<br/><br/>
<p>Also a big thanks to our other supporters:</p>

<ul>
	<li><a href="https://twitter.com/CRT_Capital" rel="noopener ugc nofollow" target="_blank">Crypto Round Table</a></li>
	<li><a href="https://msng.link/o/?@buff_10=tg" rel="noopener ugc nofollow" target="_blank">Atiom</a></li>
</ul>
<br/>
<p>UniX has a seriously ambitious mission, but it has the&nbsp;<a href="https://unixgaming.org/partnerships-and-investments/" rel="noopener ugc nofollow" target="_blank">advisers and partners</a>&nbsp;to get it there. For those of you that want to join the UniX Gaming Revolution &mdash; join the&nbsp;<a href="https://copperlaunch.com/auctions/0x6d68d7b0ca469bd1171f81a895e649d86d523c20" rel="noopener ugc nofollow" target="_blank">Copper Launch</a>&nbsp;now.</p>
<br/><br/>
<p><strong>Join the Unix Gaming Community.</strong></p>

`;

export default function BlogPost() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX Gaming Fundraise Has Officially Reached $28 Million';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            image="https://miro.medium.com/max/1400/0*lhPQdN-n57iKiSGc"
            sx={{ textAlign: 'center' }}
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

          <div style={{ padding: '0 50px', maxWidth: '850px', margin: '0 auto' }}>
            <Markdown children={POST_BODY} />
          </div>
        </Card>
      </Container>
    </Page>
  );
}
