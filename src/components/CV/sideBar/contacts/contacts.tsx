import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { CVData } from "../../../../interface/CVData";
import DynamicIcon from "../../../dynamicIcon/DynamicIcon";
import { useTranslation } from "react-i18next";

type ContactsProps = {
  contactsData: CVData["contacts"];
};

const Contacts = ({ contactsData }: ContactsProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h3 className="text-black font-bold underline text-center mb-2">
        {t("CONTACTS")}
      </h3>
      {contactsData ? (
        <div className="flex flex-col justify-center items-center">
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
    </div>
  );
};

export default Contacts;
