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
<p><span>Most people begin gaming because it&rsquo;s fun. In the future, people may play games to have fun </span><span><em>and</em></span><span> earn money. And no, we&rsquo;re not talking about becoming a famous Twitch streamer. There are a handful of games due to soar in 2022 that reward players with crypto just for playing. Play to earn crypto games are as good as they sound, and while we&rsquo;re only in the early days of the gamification of crypto, experts think that they have a bright future. Indeed, one industry expert, Twitter-founder Jack Dorsey, believes that play2earn games will be the </span><span><em>only</em></span><span> type of games that people play in five years.</span></p>
<p><span>That&rsquo;s pretty exciting. The gamers themselves will highly welcome this shift in the gaming world. In the past, the only people to get rich from the gaming world were the developers of the game; with crypto gaming, the wealth is distributed much more widely. The rise of blockchain technology, and especially the rising popularity of NFTs, has ushered in a new era of gaming.</span></p>
<p><span>So what games do we have to look forward to in the coming year? Let&rsquo;s take a look at five of the most promising games. However, this is far from an exhaustive list, so it&rsquo;s worth keeping an eye on news from the GameFi world to see what other titles are scheduled for release.&nbsp;</span></p>
<p><span><br/><h3>Syncity</h3></span></p>
<p><span>Syncity looks like it&rsquo;ll be an exciting, attention-worthy game. But before we get into the details of the game, let&rsquo;s take a look at what the developers had to say. It&rsquo;s pretty encouraging for people who believe in the power and potential of crypto games! The co-founder of Syn City says, &ldquo;we believe everyone should have equal right to earn.&rdquo; That&rsquo;s the kind of mindset that drives blockchain technology and which provides the foundation of the title.&nbsp;</span></p>
<p><span>So what can you expect from the game itself? The details so far are that the world is something of a mafia metaverse. That ensures that players won&rsquo;t just have the chance to earn money from the game: they&rsquo;ll also have fun. The mafia narrative has endured through the decades because it&rsquo;s a rich and evocative world that lends itself especially well to gameplay. It&rsquo;ll be especially appealing to people who enjoyed the worlds of GTA and Cyberpunk 2077 since the game's graphics and design were based on these two titles.&nbsp;</span></p>
<p><span><br/><h3>Monkeyball&nbsp;</h3></span></p>
<p><span>Monkeys and soccer? Sign us up. That&rsquo;s exactly what Monkeyball offers. Using Solana blockchain technology, this title will give gamers the chance to enjoy all the staples of these kinds of fun esports games while also improving their bank balance.&nbsp;</span></p>
<p><span>The game is set to launch in the first quarter of the year, but there are already plenty of details available -- and plenty of hype, too. There are three different ways to play the game: you can spend time improving your skills in the training zone, compete against friends or strangers in a team v team battle, or link up with other players to compete on the same team.&nbsp;</span></p>
<p><span>That&rsquo;s not all that different from what you&rsquo;d find in other soccer games. The difference here is that the players in these games are monkeys, and you have the chance to earn money! The game currency will be MonkeyBucks (stylized as $MBS). You can use your MonkeyBucks to breed new monkey players or to buy NFTs from the in-game store. You&rsquo;ll earn money by engaging with the game as much as possible. For example, winning games, watching games or using your metaverse stadium to host games.&nbsp;</span></p>
<p><span><br/><h3>Sidus Heroes&nbsp;</h3></span></p>
<p><span>It&rsquo;s relatively easy to build a game using blockchain technology. But to build a high-quality, compelling game that&rsquo;ll have people coming back for more? That&rsquo;s the challenge. But it&rsquo;s a challenge that the developers of Sidus Heroes were more than happy to tackle head-on.&nbsp;</span></p>
<p><span>And the early buzz around Sidus Heroes is that they have succeeded. This massive multiplayer online role-playing game is set to be similar in scope and ambition to legendary titles such as World of Warcraft and Elder Scrolls Online. At the moment, all we have to go off is a live demo of the game. The developers released a video of the battle arena in full swing, and we can see that the graphics are a level above what most early blockchain games were able to offer.&nbsp;</span></p>
<p><span>The capacity for excitement and adventure in Sidus Heroes is large. You can earn your money through a wide range of professions, for which you&rsquo;ll earn SIDUS tokens. You can also earn other tokens called SENATEs, which give players the chance to decide how the game will evolve.&nbsp;</span></p>
<p><span><br/><h3>Starsharks&nbsp;</h3></span></p>
<p><span>Starsharks isn&rsquo;t just one title: it&rsquo;s a host of titles. It&rsquo;s an ecosystem that may come to dominate the crypto game market in the coming years. So far, they&rsquo;ve released one title, called StarSharks: Warriors, a card game where players have to eliminate their opponents. This is just the beginning of the ride for Starsharks, however. They&rsquo;ve got five more titles in the works, some of which will be released in 2022.&nbsp;</span></p>
<p><span>The developers raised $4.6 million in funding, which shows there&rsquo;s a lot of support for the world they&rsquo;re trying to build.&nbsp;</span></p>
<p><span><br/><h3>DeFi Kingdoms</h3></span></p>
<p><span>DeFi Kingdoms uses the Harmony Network and was, for a period, stood at the top of the DappRadar charts. That was an early sign that the game was here to stay, and this is a view that was reinforced when the in-game token JEWEL began to surge. With the token, gamers will be able to buy NFTs. The game itself looks fun to play, and indeed, it&rsquo;s the fun element that has led to its exceptional growth.&nbsp;</span></p>
<p><span>It&rsquo;s currently challenging the rule of Axie Infinity. And if current trends continue, it&rsquo;ll have a massive 2022.</span></p>
<p><span><br/><h3>Final Thoughts&nbsp;</h3></span></p>
<p><span>There&rsquo;ll be more games on the way, no doubt about it. But at the moment, it&rsquo;s the ones that we&rsquo;ve outlined above that look set to have the most promising forthcoming year. So if you&rsquo;re looking for earn2play games, check out those titles.&nbsp;</span></p>`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'Top 5 Upcoming Games of 2022';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
