import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { CVData } from "../../../../interface/CVData";
import DynamicIcon from "../../../dynamicIcon/DynamicIcon";

type ContactsProps = {
  contactsData: CVData["contacts"];
};

const Contacts = ({ contactsData }: ContactsProps) => {
  return (
    <>
      {contactsData ? (
        <div className="p-4 m-2 flex flex-col justify-center items-center">
          {contactsData.map((contact) => (
            <div className="w-[100%] flex flex-row justify-start text mb">
              <div className="mr-2">
                <DynamicIcon
                  prefix={contact.icon.prefix as IconPrefix}
                  iconName={contact.icon.name as IconName}
                />
              </div>
              <a href={contact.href} target="blank" className="text text-sm">
                {contact.text}
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Contacts;
