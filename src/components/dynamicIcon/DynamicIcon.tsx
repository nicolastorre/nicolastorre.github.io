import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DynamicIconProps = {
  prefix: IconPrefix;
  iconName: IconName;
};

const DynamicIcon = ({ iconName, prefix }: DynamicIconProps) => {
  const coffeeLookup: IconLookup = { prefix, iconName };
  const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

  return <FontAwesomeIcon icon={coffeeIconDefinition} />;
};

export default DynamicIcon;
