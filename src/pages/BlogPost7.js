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
<br/><p data-selectable-paragraph="">As the holidays approach thick and fast, many families worldwide are preparing for yet another less than ideal Christmas period at the hands of the pandemic. COVID&rsquo;s mass eruption has torn through lives unbiased by race, religion and class &mdash; but it is safe to say that many developing countries have felt the full raw and unfiltered effects on their economies and within their societies a little more challenging.</p>
<p data-selectable-paragraph="">The majority of Unix Guild members are situated in the Philippines, where reverberations from the pandemic disrupted people&rsquo;s every day, leaving many without a job or a source of income. With the lack of physical work, many people turned to Play-To-Earn gaming as their sole income revenue. What was born out of necessity flourished into a genuine opportunity to make the local living wage double, and in some instances, triple it.</p>
<p data-selectable-paragraph="">Knowing how the Play-To-Earn revolution began in the Philippines evoked within us a true sense of respect and responsibility for our scholars. Our community&rsquo;s tenacious desire to succeed, work hard and earn, for themselves and their families is something we sincerely admire. Family values run deep within the veins of our guild, and we look at our community as an extension of us. We promise to continually recalibrate our compass to ensure we are aligning with our Northstar: the needs of our community, first and foremost.</p>
<br/><h3 data-selectable-paragraph="">The gift of giving</h3>
<p data-selectable-paragraph="">On top of the COVID crisis, we know UniX members have been through particular hardships this year due to recent typhoons. For this reason, we would like to offer a token of appreciation by donating 100% of all UniX SLP profits to our members throughout December.</p>
<h1 data-selectable-paragraph="">A special thank you to our scholars</h1>
<p data-selectable-paragraph="">We want to thank each of our scholars for all of the hard work throughout this challenging time, and we hope that in the spirit of Christmas, this gift from us to you will help provide a little extra joy this year. We are so happy to have you onboard, and we look forward to supporting you for many more years to come.</p>
`;

export default function BlogPost5() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'UniX donates 100% of SLP profits to its members throughout December';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*GDvXy5LZHW6u-cIOhXsipQ.jpeg"
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
