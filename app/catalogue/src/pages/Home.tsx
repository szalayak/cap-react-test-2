import { Bar, FlexBox, Page, ProductSwitch, ProductSwitchItem, Title } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/wrench";
import "@ui5/webcomponents-icons/dist/contacts";
import "@ui5/webcomponents-icons/dist/hint";

export const Home = () => {

    return (
        <Page style={{ height: "100%", display: "flex", flexDirection: "column" }}
            header={<Bar><Title>
                Bookstore
            </Title></Bar>}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }}>
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
                    <ProductSwitchItem
                        icon="hint"
                        titleText={"About"}
                        targetSrc="#/about"
                    />
                </ProductSwitch>
            </div>
        </Page>
    )
}