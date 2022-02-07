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
<br/><br/>
<p>As part of the UniX Gaming community, many of you reading this have already invested, or plan on investing in the $UNIX token. The benefits of holding the token are undeniable, giving holders early access to the newest game titles released on our upcoming launchpad, as well as further in-game benefits and rewards. Furthermore, with all of our exciting, upcoming partnerships and announcements, anyone invested in our token will soon be reaping the rewards.</p>
<p>Previously, $UNIX was only available on UniSwap, meaning that gas fees were high on the ethereum chain, and people looking to purchase only had one option. That is no longer the case. UniX Gaming is thrilled to announce our very first CEX listing, with no other than Bittrex!</p>
<br/><h3>What is Bittrex?</h3>
<p>Bittrex is a centralized crypto exchange founded in 2014 by three cybersecurity engineers. It offers over 200 cryptocurrency trading pairs, as well as being a &ldquo;fiat onramp&rdquo; allowing for many of these currencies to be purchased with fiat currency. Due to the background of the founders, there has been a major emphasis on security within the platform, and in turn, making it the most secure centralized exchange on the market.</p>
<p>Bittrex is a platform that appeals to experienced traders for a variety of reasons. As well as the security aspect of the platform, it also offers features such as advanced order types, providing investors with a way to use a combination of orders for more sophisticated trades. It also keeps trading fees low and does not charge a premium for purchases using debit cards like some platforms.</p>
<p>Expanding on the security of the platform, Bittrex implements a number of safeguards to make sure your accounts and funds remain secure. These include:</p>
<ul>
<li><strong>Two-factor authentication:&nbsp;</strong>Bittrex uses two-factor authentication (2FA) via Google Authenticator, which is known for generally being more secure than SMS.</li>
<li><strong>Whitelisting approved Wallets:</strong>&nbsp;Bittrex users can set up wallet whitelisting. What this does is that it restricts withdrawals of funds to only that of wallet addresses you&rsquo;ve approved. This helps prevent potential scammers from withdrawing funds to their wallets</li>
<li><strong>IP Address Whitelist:</strong>&nbsp;Similar to approved wallets, only authorized devices with specific IP addresses can access the account. This helps prevent outside attackers from gaining access.</li>
<li><strong>Cold Storage:</strong>&nbsp;Bittrex keeps the majority of its crypto balances in what&rsquo;s known as &ldquo;cold storage&rdquo; meaning it&rsquo;s not accessible via the internet.</li>
</ul>
<p>There are plenty more features that Bittrex offers, however, the general point is that Bittrex is an exchange that is both incredibly secure, and beneficial to use due to its trading capabilities and low fees.</p>
<br/><h3>Benefits for UniX</h3>
<p>Bittrex will become the first CEX to host the UniX token. A listing on Bittrex for UniX is a fantastic step forward in our mission to make the platform as accessible as possible. This listing will provide the UniX community members and investors with an easy platform to purchase the UniX token with a number of other cryptocurrencies. The ability to purchase the token here will make it more secure for token holders due to the incredible security that Bittrex offers, it will reduce the cost for buyers as it will no longer be subject only to the ethereum gas fees, and finally, a centralized exchange will allow a larger number of people to purchase due to the ease of this platform and the increased exposure of the UniX token.</p>
<p>This listing is a major move for UniX, however, it is still only the beginning. Stay tuned as we have many more exciting announcements and developments coming up in the coming months!</p>

`;

export default function BlogPost12() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  const pageurl = window.location.href;
  const title = 'First CEX listing for UniX: We’re now on Bittrex!';

  return (
    <Page title={title}>
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title={title}
            sx={{ textAlign: 'center' }}
            image="https://miro.medium.com/max/1400/1*d5EmHAv5xd240FvLXZqX0A.jpeg"
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
