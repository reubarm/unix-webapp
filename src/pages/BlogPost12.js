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
<p><span>There&rsquo;s no shortage of cryptocurrencies and related emerging technologies in the digital space. Indeed, depending on who you ask, there may be as many as 7500 cryptocurrencies out there. But of course, they don&rsquo;t all have equal levels of value and potential. Many of them will never achieve even a semblance of success. So how can you be sure that the crypto you&rsquo;re investing in is worth your time, effort, and money? While there&rsquo;s a lot of information about existing, popular cryptos, it can be difficult to determine which of the newcomers has potential.&nbsp;</span></p>
<br/><p><span>To fill this gap, many people are using a crypto launchpad. This is a mutually beneficial platform that helps both emerging blockchain technologies and early investors. In this blog, we&rsquo;re going to run through some of the key details that you need to know about these launchpads, including what they are, how they work, and how they may influence the crypto market.&nbsp;</span></p>
<p><span><br/><h3>The Purpose of Launchpads</h3></span></p>
<p><span>As we said above, not all cryptocurrencies have the same level of potential and quality. And even the ones that </span><span><em>do</em></span><span> have a lot of potential have some obstacles that they need to overcome. For many, there&rsquo;s a cash issue. In order for a new crypto or blockchain technology to get off the ground, serious investment is needed. And that&rsquo;s not always something that founders have to hand. As such, they need to raise money.</span></p>
<p><span>A crypto launchpad can help with this. By listing the crypto on the platform, they&rsquo;re providing an opportunity to bring investors on board at the earliest stage. And, of course, the investor gets something in return, too. They also get access to cryptocurrencies and other blockchain technologies at the earliest stage. This is beneficial because the price is usually extremely low at this stage since the value of the technology is still in the conception stage. That means that investors can get access to cryptocurrencies at bargain prices, with the hope that their early investment will bring big rewards in the future.&nbsp;</span></p>
<p><span>There&rsquo;s another big advantage for both founders and investors, too: these types of platforms typically have a robust vetting process that ensures quality and trustworthiness. The best launchpads work to ensure that only quality crypto and blockchain companies make it onto their platform. Investors usually have to go through the Know Your Customer (other abbreviated as KYC) process before they can invest.&nbsp;</span></p>
<p><span>The tightly controlled platform is especially beneficial for investors. In recent years, the rising popularity of blockchain technology has meant that there has been a rise in crypto scams. A trusted launchpad can help to eliminate the risks of a shady deal. With cryptocurrencies and blockchain experiencing a huge boom in popularity in recent years, it&rsquo;s more important than ever that some measures are in place that help people make reliable, safe investments -- and that&rsquo;s just what the best launchpads help to do.&nbsp;</span></p>
<p><span><br/><h3>How Do Launchpads Work?</h3></span></p>
<p><span>So how exactly do launchpads work? A good way to think of them is that they&rsquo;re essentially an aggregation of the best cryptocurrencies and blockchain technology projects out there. Valuable platforms have a robust vetting process that projects have to meet in order to be listed on the platform. When a potential investor visits the platform, they can be assured that they&rsquo;re seeing the better projects on the market -- and very possibly, the </span><span><em>best</em></span><span> on the market. This is just one of the reasons why people use launchpad platforms. The other main service that launchpads offer is that they give early access to new projects, and that can be highly useful. Successful blockchain projects tend to rise in value once everyone knows that the project is valuable. By that time, the possibility to achieve handsome projects on the initial investment has usually gone. In order to get a handsome return, investors need to get in at the earliest stage possible.</span></p>
<p><span>And that&rsquo;s just what launchpads offer. You can almost think of them as a pre-sale invitation to back early-stage blockchain projects. If you&rsquo;re a subscriber of a launchpad, you&rsquo;ll be issued tokens, which you can then use to back a particular project.&nbsp;</span></p>
<p><span><br/><h3>The Impact On the Crypto Market</h3></span></p>
<p><span>Launchpads are relatively new. Of course, you can say most things related to blockchain are &lsquo;new&rsquo; -- but crypto launchpads are especially new. They&rsquo;ve risen in popularity over the past year, and it seems likely that in 2022, they&rsquo;ll continue to grow in stature, respectability, and popularity.&nbsp;</span></p>
<p><span>Despite being young, launchpads have already had an impact on the crypto market. Perhaps the most obvious benefit that they&rsquo;ve brought to the market is that they&rsquo;ve helped to reduce the fear of scams and shams. The rise of untrustworthy players in the crypto sector has grown considerably in the past couple of years, and that&rsquo;s caused problems for both project founders and investors.&nbsp;</span></p>
<p><span>They also help to make crypto and blockchain investing more accessible. While conducting thorough research on a project independently is possible, that does take time. They aim to serve the growing interest in this type of investing by filtering down the thousands of new projects and selecting the best of the best. Plus, new investors will know that they&rsquo;re avoiding scams and that their investments are secure and easy to do.&nbsp;</span></p>
<p><span><br/><h3>UniX Gaming</h3></span></p>
<p><span>There are not just traditional cryptocurrency launchpads available, either. Play to earn blockchain technology is increasingly interesting to investors. To meet this growing demand, UniX Gaming, a gaming launch pad, will launch in January 2022. The forthcoming is expected to be a big one for play to earn blockchain projects. And just as with cryptocurrencies, investors will need as much help as they can get to ensure that they&rsquo;re backing projects that offer growth possibilities. UniX has ambitions of becoming the best play to earn launchpad on the market and is likely to succeed, since it has bridges with multiple blockchains.&nbsp;</span></p>
<p><span>The future already looked bright for blockchain. With the increased security and quality that launchpads provide, that future looks even brighter now.&nbsp;</span></p>
`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'What is a crypto launchpad and how it works';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
