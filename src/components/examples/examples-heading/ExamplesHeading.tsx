import { ExampleHeadingLevelType } from "./ExamplesHeading.enum";
import { ExampleProps } from "./ExamplesHeading.interface";

const ExamplesHeading = (props: ExampleProps) => {
    const{title, headingLevel= ExampleHeadingLevelType.H2, headingStyle} = props;
    const Heading = headingLevel;

  return (
    <div>
      <Heading className={`text-2xl ${headingStyle}`}>{title}</Heading>
    </div>
  )
}

export default ExamplesHeading
