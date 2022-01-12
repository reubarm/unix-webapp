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
<p><span>Things are looking good for the cryptocurrency Polygon. Previously known as MATIC, the Indian-based crypto saw massive gains in 2021, and though it did experience a slight dip throughout the year, it was able to rally faster and more strongly than other cryptocurrencies. Part of the appeal of Polygon is its versatility. You&rsquo;ll find it in the world of NFTs, DeFi, and, increasingly, in the gaming world.&nbsp;</span></p>
<br/><p><span>In this blog, we&rsquo;re going to focus on the latter point in particular. Polygon is exploding in crypto gaming, but why is that? We&rsquo;ll also run through the ins and outs of Polygon, including what it is and why people are currently optimistic that it has a bright future.&nbsp;</span></p>
<p><span><br/><h3>About Polygon</h3></span></p>
<p><span>So what sets Polygon apart from the others? In general, what has held Ethereum back is that it has scalability issues. But Polygon aims to improve this. Fundamentally, it functions as a layer 2 scaling solution that helps to improve the speed of the transactions made via Ethereum based Dapps. And those transactions aren&rsquo;t only faster -- they&rsquo;re also cheaper. It was previously known as MATIC, and in truth, does the same as everything that the Ethereum network can do, but, as we just said, it does those things faster and cheaper, which makes it highly attractive, and useful.&nbsp;</span></p>
<p><span><br/><h3>The Crypto Gaming World&nbsp;</h3></span></p>
<p><span>There&rsquo;s been a huge rise in play to earn crypto gaming in recent months, and this is a trend that seems likely to continue moving forward, too. This is a type of gaming aimed at adults where people are rewarded with crypto just by playing games. The future of this gaming type is so bright that it even led Reddit co-founder Alexis Ohanian to suggest that in five years, this will be the only type of game that people play.&nbsp;</span></p>
<p><span>And how does this tie in with a bright future for Polygon? Because they&rsquo;re investing in this sector in a big way. The project involves creating new games based on NFT on the network. Blockchain gaming and NFTs are closely interlinked and has led to many companies investing heavily in this type of gaming. Polygon is positioning itself as the leading network, which will be ultimately beneficial to everyone because of the speed and low cost of the transactions involved.&nbsp;</span></p>
<p><span>Entering the gaming world seems to be the next frontier for blockchain technology, especially with the rise of the metaverse, which is something that we&rsquo;ll discuss further below. The minds behind Polygon have recognized that not only is there huge potential for growth but that this technology is needed if blockchain and gaming are going to become mainstream.&nbsp;</span></p>
<p><span>And Polygon is showing that it&rsquo;s deeply committed to the world of blockchain gaming by taking two steps in recent years. The first is creating a partnership with GameOn, with whom they&rsquo;ll create games. They&rsquo;ve also set up Polygon Studio, into which they&rsquo;ve invested some $100 million. This project is aimed at game developers, who will be able to link their Web 2.0 titles with the technology that drives Web 3.0.&nbsp;</span></p>
<p><span><br/><h3>The Rise of The Metaverse</h3></span></p>
<p><span>There&rsquo;s been a lot of talk about the metaverse, fuelled by the decision by Facebook to rebrand their company as Meta. They&rsquo;re investing heavily in the idea, but there&rsquo;s every chance that it&rsquo;s not Facebook that will provide the backbone of the metaverse but Polygon. Why? Because many of the big companies and projects that are likely to shape the metaverse are already working with Polygon. They&rsquo;ve got the support of companies such as Polylauncher, Aave, Decentraland, and others.&nbsp;</span></p>
<p><span>Of course, we&rsquo;re still in the early stages of the metaverse. At this stage, it&rsquo;s little more than an idea. But the pieces are being moved into place, and as it stands, it&rsquo;ll be Ethereum and Polygon that lead the way.&nbsp;</span></p>
<p><span><br/><h3>Low Gas Fees</h3></span></p>
<p><span>One of the stumbling blocks that has been holding Ethereum back is that there are high gas fees. But Polygon has found a way to get around these high fees, which helps to make the technology accessible, and thus makes it more appealing to companies. They added an extra layer which keeps the costs at a minimum. If blockchain technology is to be adopted on a widespread scale, then it&rsquo;s essential that the costs are low. And that&rsquo;s just what Polygon has done, crucially without it impacting performance.</span></p>
<p><span>Polygon seems to have arrived at the right time. Their blend of affordability and performance is exactly what blockchain needs. Previously, the barrier to entry was too high. Polygon has thus made it more accessible. But they&rsquo;ve also brought something else to the table, too: scalability. The many side chains that Polygon uses makes it more advanced than other options out there.</span></p>
<p><span><br/><h3>A Rising Reputation&nbsp;</h3></span></p>
<p><span>Polygon is receiving a lot of attention because of the work that it&rsquo;s doing. But it&rsquo;s also receiving notice because of the increasing interest in crypto gaming. In recent times, we&rsquo;ve seen the launch of the NFT guild, NFT gaming Guild and GameFI. These help to make NFTs accessible to gamers and to locate the latest games that use blockchain technology. The increasing popularity of these projects reflects the growing interest in crypto gaming. And this is something that will continue to rise in the future, especially as titles become available. The fund Polygon has created to fund these types of projects is only young; it&rsquo;ll take time for the effects of the funding to be felt. When they arrive, interest will again balloon.&nbsp;</span></p>
<p><span><br/><h3>Conclusion</h3></span></p>
<p><span>We&rsquo;re still in the early days of crypto gaming, but there&rsquo;s little doubt that there&rsquo;s a bright future. There are plenty of big players getting involved in these types of projects and investing huge sums of money. While there will be plenty of competition, Polygon is setting itself apart as one of the early leaders in the field. And given the commitment of money and energy they&rsquo;re dedicating to this side of their technology, it&rsquo;s likely that they&rsquo;ll be among the leaders in the future, too.&nbsp;</span></p>
`;

export default function BlogPost11() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'Why is polygon exploding for crypto gaming?';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://images.pexels.com/photos/8369601/pexels-photo-8369601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
