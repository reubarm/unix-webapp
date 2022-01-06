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
<p data-selectable-paragraph="">This week Unix Gaming joined forces with Blockchain Game Alliance to forge a proud partnership that fosters community, opportunity and innovation within the Blockchain gaming industry.</p>
<p data-selectable-paragraph="">At UniX, we are incredibly proud of the play-to-earn growth, and we are beyond excited to help shape its future. Partnering with Blockchain Game Alliance (BGA) will allow us to positively disrupt the paradigms of traditional gaming and draw attention to the significant benefits play-to-earn offers. BGA has a vast and varied network of companies and individuals who share a common goal and shared unified vision to grow and develop the play-to-earn space for everyone involved.</p><br/>
<h3 data-selectable-paragraph="">What is the Blockchain Game Alliance?</h3>
<p data-selectable-paragraph="">BGA is a company committed to promoting blockchain within the gaming industry. Since its inception, Blockchain Game Alliance&rsquo;s mission has been to; encourage the development of standards and share best practices, advance public understanding, and provide an open and inclusive platform for discussion and engagement.</p><br/>
<h3 data-selectable-paragraph="">The collaborative community</h3>
<p data-selectable-paragraph="">The organization has built a coalition of gaming and blockchain companies who are all working toward that shared ambition &mdash; and together, we can unite to yield positive outcomes for blockchain gaming.</p>
<p data-selectable-paragraph="">BGA&rsquo;s robust and considered community smashes silos and uncovers the power of community by engaging in the platform&rsquo;s open forum where individuals and companies can come together to help meet their overarching strategic aims. The conference creates a space for collaborative and immersive sessions to share ideas, values, and aspirations and apply a spotlight on establishing best practices and common standards. The forum empowers members to share new ways to create, play, publish, and help build strong communities around games, enabling the industry to organically evolve through engagement and develop the success of the technology.</p>
<p data-selectable-paragraph="">The extensive community extends to hundreds of members, including computer hardware manufacturer AMD, blockchain-based game Splinterlands, the leading NFT market data platform NonFunglible.com, and financial institution Simplex.</p><br/>
<h3 data-selectable-paragraph="">Partnering with trusted experts</h3>
<p data-selectable-paragraph="">Driven by their mission to advance public understanding and awareness of blockchain games, BGA continuously shares insights, benefits and limitations of blockchain technologies. The company holds a huge responsibility that prompts them to search for professional partners who embody trust, authority and stability.</p>
<p data-selectable-paragraph="">The synergy between BGA and Unix Gaming manifests as a force for good for blockchain gaming &mdash; together, we can encourage growth and raise awareness beyond industry insiders. This partnership strengthens our shared goal to frequently push aspirational efforts, improve standards, and break boundaries.</p>
<p data-selectable-paragraph="">The mass revolution of the gaming industry, which is fast approaching, is underpinned by blockchain play-to-earn games, and we are thrilled to unite with trusted experts BGA to be at the forefront of moulding this new and exciting industry.</p>
<p data-selectable-paragraph="">If you would like to find out more about Blockchain Game Alliance, visit:&nbsp;<a href="http://www.blockchaingamealliance.org/" target="_blank" rel="noopener ugc nofollow">www.blockchaingamealliance.org/</a></p>`;

export default function BlogPost5() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX Gaming and Blockchain Alliance Coalition';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/0*szXuwcZe4opQwlgf"
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
