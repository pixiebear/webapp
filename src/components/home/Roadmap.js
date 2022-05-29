import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { Title, Text, Section } from "../core";

import CodeIcon from "../../assets/icons/Code";
import PlayIcon from "../../assets/icons/Play";
import BlubIcon from "../../assets/icons/LightBlub";
import RocketIcon from "../../assets/icons/Rocket";
import GiftIcon from "../../assets/icons/Gift";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

function Roadmap() {

return (
<>
<Element name="roadmap" id="roadmap">
    <Section className="pt-4 pb-0">
      <Container>
                <Title variant="secSm" className="my-5 pb-lg-4">
                    Roadmap.
                </Title>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--phase1"
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date="2022 May"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<PlayIcon />}
              >
                 <Title variant="cardBig" className="mb-4">
                  01. Phase
                </Title>
                <Text variant="p" >
                  In phase one, Pixie Bears wake up from the long and well-deserved hibernation and share the story of their genius plans of acquiring and HODLing. Taking the Website and Discord out of the den, and putting the worthy membears on the list.
                </Text>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--phase2"
                date="2022 Jun"
              
                icon={<BlubIcon />}
              >
                <Title variant="cardBig" className="mb-4">
                  02. Phase
                </Title>
                <Text variant="p" >
                  After Phase one, it is the time to start giving out rewards for the members who stood out with their commitment vigor and of course good memes. in Phase two. Creative-hearted membears will be rewarded handsomely. For all membears there are many Giveaways. Collabs!
                </Text>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--phase3"
                date="2022 - July"
             
                icon={<RocketIcon />}
              >
                <Title variant="cardBig" className="mb-4">
                  03. Phase
                </Title>
                <Text variant="p" >
                  All the Phase one and two work makes Phase 3. That much more beneficial for all. Beneficial how, you may ask. If all the Phase 2 giveaways just did not get you stuffed, we suggest you try a serving of WL Mint, Live Mint, Sold Out, Secondary Market Listing, all in Phase 3.
                </Text>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--phase4"
                date="2022 Avg"
              
                icon={<GiftIcon />}
              >
                <Title variant="cardBig" className="mb-4">
                  04. Phase
                </Title>
                <Text variant="p" >
                  After successful mint and incorporation. Phase four is where membears will enjoy the giveaway. Community pools for donations will take a place on our discord and twitter. Development of $HONEY token and Roadmap 2.0. To top it all off, Sick merch for the fashion-savvy or just Members keen on showing off. I'm honestly of the latter kind.
                </Text>
              </VerticalTimelineElement>
             
              <VerticalTimelineElement
           
                icon={<CodeIcon />}
              />
            </VerticalTimeline>
      </Container>
  </Section>
</Element>


</>
);


}


export default Roadmap;