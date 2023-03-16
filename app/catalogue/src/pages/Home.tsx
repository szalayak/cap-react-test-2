import { FlexBox, ProductSwitch, ProductSwitchItem } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/wrench";
import "@ui5/webcomponents-icons/dist/contacts";

export const Home = () => {

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
            <ProductSwitch>
                <ProductSwitchItem
                    icon="contacts"
                    titleText={"Catalogue"}
                    targetSrc="#/catalogue"
                />
                <ProductSwitchItem
                    icon="wrench"
                    titleText={"Admin"}
                    targetSrc="#/admin"
                />
            </ProductSwitch>
        </div>
    )
}