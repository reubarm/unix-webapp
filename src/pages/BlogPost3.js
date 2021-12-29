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

<br/><h3>What are metaverse gaming projects?</h3>
<p>Facebook recently changed the name of its parent company to Meta, signalling a paradigm shift away from old modes of interacting online to a brand new model. The company wants to make digital experiences more immersive, making the FB metaverse a core part of its vision.</p>
<p>Part of that transition involves the development of virtual world metaverse gaming projects &ndash; types of highly immersive interactions that will ride a new wave of digital technologies, likely to hit in the 2020s.&nbsp;</p>
<p>It&rsquo;s not a fringe development, either. The value of the metaverse ecosystem will expand from the estimated $46 billion today to more than $280 billion by 2025, <a href="https://medium.com/coinmonks/top-5-gaming-metaverse-projects-in-2021-e0460426c1d" target="_blank" rel="noopener">according to EarthWeb</a>. It will create more than 10,000 jobs over the coming five years and projects will blend AR, VR, blockchain and AI with existing social platforms. The potential evolution of gaming projects could be virtually unlimited.&nbsp;</p>
<br/><h3>Metaverse Gaming Projects</h3>
<p>The term &ldquo;meta&rdquo; comes from the Greek and means &ldquo;after&rdquo; or &ldquo;beyond&rdquo; and &ldquo;verse&rdquo; comes from &ldquo;universe&rdquo; which means &ldquo;what exists.&rdquo; The metaverse, therefore, is a kind of universe beyond standard reality &ndash; an optional new existence players can immerse themselves in.&nbsp;</p>
<p>You can think of metaverse gaming projects as conventional gaming projects but on steroids. The goal is to immerse players in metagame environments more convincingly than conventional screen-based play by using new technologies to create shared realities.&nbsp;</p>
<p>Interestingly, the concept isn&rsquo;t new. In fact, it&rsquo;s something that&rsquo;s been around since the early 2000s. <a href="https://secondlife.com/" target="_blank" rel="noopener">Second Life</a>, for instance, was a good example of metaverse 1.0. The difference today, though, is that we now have the required technologies to make it more convincing. New technologies are making it possible to totally immerse the visual and auditory senses in digital environments, with some progress on touch as well.&nbsp;</p>
<p>While headline technologies, such as Facebook Oculus, will drive much of the movement towards metaverse 2.0 gaming and 3D metaverse, underlying blockchain technologies are also exerting a powerful influence. NFTs, for instance, will play an important role in gaming. These create unique digital artefacts associated with particular players, generating scarcity which developers can then leverage in meaningful ways.&nbsp;</p>
<p>For example, the blockchain makes it possible to create an immutable, network-verified ledger of all digital objects that every player owns. The technology sets up a system whereby nobody can copy items from one player to another. MMORPGs developers, for instance, could sell item NFTs into the game space which would then become permanent features of the economic landscape.&nbsp;</p>
<br/><h3>Play-To-Earn Gaming Models</h3>
<p>Play-to-earn models are trying to change this setup. The idea is to give each player an economic stake in the games they play that rewards them for the time they spend in the gaming environment. In other words, games financially reward players for the positive externalities they create (such as forming squads or guilds).&nbsp;</p>
<p>Gamers collectively spent around $143 billion on apps in 2020, with the app owners taking home a whopping <a href="https://cointelegraph.com/news/the-metaverse-play-to-earn-and-the-new-economic-model-of-gaming" target="_blank" rel="noopener">$100 billion</a> of that figure in profits. That&rsquo;s because, at present, developers set the economic rules of games, and players must hand over their cash to take part, regardless of the positive contribution they make to online gaming communities.&nbsp;</p>
<p>But now, thanks to blockchain-based technologies, things are changing. Investment is <a href="https://gamedaily.biz/article/1027/report-global-game-biz-sees-96b-in-investment-in-last-18-months-may-be-worth-250b-by-2023" target="_blank" rel="noopener">pouring into the sector</a> because games are finally rewarding players for the value they contribute. When players have incentives to play (outside intrinsic game rewards), they are much more likely to dedicate themselves to the gaming community.&nbsp;</p>
<br/><h3>Examples Of Play-To-Earn Games</h3>
<p>If this all sounds highly futuristic, you are right. Play-to-earn models already have a foothold in the $250 billion global gaming industry, and their influence is growing. Axie Infinity &ndash; a Pok&eacute;mon-inspired blockchain-based game &ndash; developed its own cryptocurrency: SLP. Players engage in battles and carry out tasks and, in return, they receive the currency. They can then go to crypto exchanges and trade it for other crypto assets or even cash.&nbsp;</p>
<p>This contrasts dramatically with economic systems in games such as World of Warcraft (WoW). Here, players can exchange items for goods that they want. But they can&rsquo;t take their WoW gold out of the system and use it elsewhere. It&rsquo;s only applicable in the game environment.&nbsp;</p>
<p>If you think that gamers can only make small sums of money by engaging in metaverse games, think again. Top Axie Infinity gamers can earn around 1,500 SLP per day, which translates to around $250 in real money, depending on the exchange rate.&nbsp;</p>
<p>Of course, the Axie Infinity model isn&rsquo;t the only example of how play-to-earn works. There are many other examples too.&nbsp;</p>
<p>Take fantasy sports mobile app OneTo11. This platform allows bettors to compete with each other on a transparent, decentralized platform. Players can create their own fantasy contests and win by being in the top quarter of results. They can also earn referrals by getting other players to participate in paid contests (similar to how affiliate marketing works).&nbsp;</p>
<p>Play-to-earn is even coming to shooters. TryHards is building a game based on the Polygon blockchain that will allow players to purchase NFT-based digital assets to upgrade their characters. The game will include its own cryptocurrency &ndash; $TRY &ndash; providing players with a real financial stake which they can trade outside the game.&nbsp;</p>
<br/><h3>How Does All This Relate To The Metaverse?</h3>
<p>Many people love gaming. But the problem right now is that they are not being financially rewarded for the time that they invest in these platforms. World of Warcraft players would like to spend all day in the gaming environment, but can&rsquo;t because of outside financial concerns.&nbsp;</p>
<p>Play-to-earn changes this dynamic. Under this scheme, players get rewarded for being a part of a gaming community, encouraging them to take part and create active communities &ndash; something that benefits developers.&nbsp;</p>
<p>If the VR AR metaverse is going to become an immersive parallel world that runs alongside the real one, it will need to embrace this form of gaming. Players need compensation for the positive externalities they create and to justify the time they invest in these platforms. Once gaming in digital environments caters to real-world economic concerns, the industry will take off.&nbsp;</p>
`;

export default function BlogPost3() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'What are metaverse gaming projects?';

  return (
    <Page title="What are metaverse gaming projects?">
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title="What are metaverse gaming projects?"
            sx={{ textAlign: 'center' }}
            image="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
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
