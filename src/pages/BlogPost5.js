import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

<br/><h3>Is Crypto Gaming the Future?</h3>
<p><span style="color: #fff;">Sky Mavis recently raised </span><a href="https://venturebeat.com/2021/10/06/sky-mavis-raises-152m-at-nearly-3b-valuation-for-axie-infinity-play-to-earn-nft-game/" target="_blank" rel="noopener"><span style="color: #4a6ee0;">$152 million</span></a><span style="color: #fff;"> at a $3 billion valuation to grow its famous Axie Infinity play 2 earn crypto game. The move made many investors sit up and take notice: the "play, earn, repeat" is big business.&nbsp;</span></p>
<p><span style="color: #fff;">The question at the back of everyone's mind is, how is this possible? How can a game made by a tiny studio generate those kinds of funds?&nbsp;</span></p>
<p><span style="color: #fff;">It all comes down to the underlying technology driving it. We're moving away from pay-to-play and pay-to-win models and towards new play to earn games that change the player dynamic.&nbsp;</span></p>
<p><span style="color: #fff;">What's more, players couldn't be more ready for it. They are sick of developers crafting games that force them to fork out money if they want to progress.</span></p>
<br/><h3>How Crypto Gaming Changes The Paradigm</h3>
<p><span style="color: #fff;">When video games first emerged in the 1950s and 1960s, they were essentially science projects. Researchers programmed them into old-fashioned mainframes, creating essential titles that often replicated conventional card or board games.&nbsp;</span></p>
<p><span style="color: #fff;">Over time, an industry developed. Software firms saw that games were popular, particularly among young people, and began developing new concepts. Atari released its legendary 2600 home video game console in 1976, with Nintendo following in the early 1980s. Games progressed and began forming niches. The Legend of Zelda introduced many players to the wonder of role-playing games, while Donkey Kong and Super Mario Brothers defined the platformer genre.&nbsp;</span></p>
<p><span style="color: #fff;">In those early days, the transaction between players and game developers was simple. Gamers paid a fee to the developer to compensate them for the time, cost and effort involved in playing the game. It was just like any other business.</span></p>
<p><span style="color: #fff;">With the rise of internet-based gaming, that old-fashioned model began to break down, not always for the better. Developers noticed that they could get players to make ongoing payments over time if they played their cards right and generated the right incentives. To make this happen, they would offer games for free upfront and then create in-game stores where players could buy items, boosts and level-ups in exchange for real money. Thus, the "freemium" model was born.</span></p>
<p><span style="color: #fff;">Some instances of freemium &ndash; such as those that provided purely aesthetic upgrades &ndash; didn't cause gamers any harm. However, many developers adopted a pay-to-win model: if you wanted to be competitive, you had to pay more money out to the developer continually. For many gamers, arrangements like that were unacceptable.</span></p>
<p><span style="color: #fff;">Fortunately, play and earn crypto games transform this paradigm for the better. Instead of punishing you for your involvement in the community by charging high ongoing fees, these games reward you with cryptocurrency (and other blockchain-based assets), which you can then trade for whatever you want.&nbsp;</span></p>
<p><span style="color: #fff;">In so doing, play and earn games address a fundamental failure in the existing model. They now reward players for their positive contributions to online gaming communities.&nbsp;</span></p>
<p><span style="color: #fff;">This development is crucial for everyone. Games, such as Dota 2 or Team Fortress, are successful because they have thriving communities. Players want to play them because they know that the presence of other players enhances their individual experience.&nbsp;</span></p>
<p><span style="color: #fff;">Thus, crypto gaming rewards players for the positive externalities they create, which isn't done under the traditional market paradigm. When they invest in building online communities or improving their skills, they get something in return (besides sheer enjoyment). Players receive blockchain-based crypto assets they can trade either in-game or external markets.&nbsp;</span></p>
<br/><h3>Why Crypto Gaming Is The Future</h3>
<p><span style="color: #fff;">While play and earn is the chief benefit of crypto gaming for players, there are many other reasons why the industry is likely to move to the blockchain model.&nbsp;</span></p>
<br/><h3>Transferability Between Games</h3>
<p><span style="color: #fff;">Imagine taking items bought in World of Warcraft and using them in Guild Wars 2. When you think about it in conventional terms, the idea seems fanciful. However, with crypto-based gaming, it could become a reality.&nbsp;</span></p>
<p><span style="color: #fff;">Developments like these are theoretically possible because blockchains are decentralized, open and permissionless by their nature. Anyone can sign up to the network, create a stake on which everyone else agrees and then use that to assert their ownership rights. Thus, anyone who owns an NFT holds that asset, regardless of the game they are playing. It is possible to transfer non-fungible tokens in weapons, armour, skins and possibly mounts between games. In addition, gamers will have the option of selling their NFT onwards, should they want to, irrespective of the particular gaming platform.&nbsp;</span></p>
<p><span style="color: #fff;">The play to earn game list is expanding and will continue to do so in the future. Play-to-earn crypto games for Android, for instance, will be interoperable with play-to-earn crypto games on iOS. Gamers won't even have to own a gaming platform to make trades.&nbsp;</span></p>
<br/><h3>Developers No Longer Own Or Control Assets</h3>
<p><span style="color: #fff;">Right now, if you equip a piece of armour on, say, World of Warcraft, Blizzard owns it. Moderators can remove it from your inventory at any time, without warning.&nbsp;</span></p>
<p><span style="color: #fff;">But once gaming starts taking advantage of crypto-based technologies, that will cease to be the case. The player will own the NFT, and the developer won't do anything.&nbsp;</span></p>
<p><span style="color: #fff;">Axie Infinity is an excellent example of a play-to-earn crypto game 2021 that puts this concept into action. Players earn NFTs and can then sell these in a free market gaming economy. NFT technology keeps supplies finite, so the developer can't just wade in at any given moment and change the parameters. Players who work hard get rewarded.&nbsp;</span></p>
<p><span style="color: #fff;">According to Token Terminal, Axie Infinity's blockchain revenue is around </span><a href="https://cointelegraph.com/news/5-reasons-why-blockchain-based-gaming-economies-are-the-future" target="_blank" rel="noopener"><span style="color: #4a6ee0;">$2.7 billion</span></a><span style="color: #fff;"> and growing exponentially. Thus, if we believe what the market is saying, the play to earn business model will be extremely popular in the future.&nbsp;</span></p>
<br/><h3>Organic Gaming Economies Will Thrive</h3>
<p><span style="color: #fff;">Organic economies are also going to drive crypto gaming in the future. Game developers generally set the parameters for their in-game economies. Staff continually fiddle with them, determining the value of items and assets according to their objectives.&nbsp;</span></p>
<p><span style="color: #fff;">Unfortunately, in many cases, the goals of the developer conflict with those of the player. All the developer needs to do to lower or raise prices is increase or decrease supply and demand.&nbsp;</span></p>
<p><span style="color: #fff;">Blockchain technology takes this power away from them and hands it to gamers. Instead of being artificially manipulated, gamers take on a role similar to that which prevails in conventional markets. Their buying and selling decisions are what determine the market price.&nbsp;</span></p>
<p><span style="color: #fff;">When real economies form, it reflects all gamers' honest opinions involved. Players can more reliably react to market incentives when choosing what to do next in the game. That's one of the reasons why Axie Infinity has been so successful. Its economy reflects the actual value of items, such as Smooth Love Potions, to everyone involved.&nbsp;</span></p>
<br/><h3>Anyone Can Build Games On Crypto Platforms</h3>
<p><span style="color: #fff;">Crypto platforms use open protocols. That means that anyone can potentially develop games that leverage the public blockchain.&nbsp;</span></p>
<p><span style="color: #fff;">Ethereum is a good example. Developers can build games entirely on the ecosystem, using NFTs as tradable items.&nbsp;</span></p>
<p><span style="color: #fff;">Low barriers will also shift the industry in the direction of crypto-based games. Blockchain makes it easy to develop games using open source technology. Virtually anyone can do it. Plus, platforms let developers outsource all their capital costs, meaning that they don't have to pay for the running and maintenance of their servers. That's Ethereum's responsibility (or whoever owns the blockchain network).&nbsp;</span></p>
<br/><h3>Earn More Money In Developing Countries</h3>
<p><span style="color: #fff;">Finally, the biggest motivator of crypto gaming is that people can play Axie Infinity or play Defi pet and earn a regular income. The "gamification" of work is now a real possibility.&nbsp;</span></p>
<p><span style="color: #fff;">Take gamers in the Philippines, for instance. Because of the COVID-19 pandemic, the country's tourist economy virtually shut down. Out of desperation, many Filipinos turned to online games to make an income. Given the low wages in the country &ndash; between $100 and $400 per month &ndash; many gamers found that they could earn more money by selling NFTs earned in-game than they could in their conventional work. Many are now gaming full-time &ndash; something that they find more enjoyable than their regular careers.&nbsp;</span></p>
<br/><h3>The Bottom Line</h3>
<p><span style="color: #fff;">In summary, there are many reasons to suppose that play-and-win crypto games are the future. Many thousands of people already play Axie Infinity for free and are earning decent sums of money as a result. Rewarding gamers for their contribution opens up an entirely new world of opportunities and will create unique economies.&nbsp;</span></p>
<p><span style="color: #fff;">What's more, there are reasons for other stakeholders in the gaming industry to move towards crypto. As billionaire investor Charlie Munger states, "show me the incentive, and I will show you the outcome." Developers want to create games on the blockchain because it reduces their overheads and helps them build thriving communities.&nbsp;</span></p>
`;

export default function BlogPost5() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { title } = useParams();
  const { post, error, recentPosts } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getPost(title));
  }, [dispatch, title]);

  return (
    <Page title="How crypto gaming works">
      <Container maxWidth="lg">
        <Card>
          <BlogPostHero
            title="How crypto gaming works"
            image="https://www.pragmaticcoders.com/hubfs/nft-crypto-gaming-developers.jpg"
          />
          <div style={{ padding: '27px' }}>
            <Markdown children={POST_BODY} />
          </div>
        </Card>
      </Container>
    </Page>
  );
}
