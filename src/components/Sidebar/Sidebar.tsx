import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import { GlobalProps } from '../app/App';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { getNavItems, NavigationItem, NavigationItemType } from './nav-items-helper';
import { For } from 'react-extras';
import NavItem from '../NavItem/NavItem';



interface SidebarProps extends GlobalProps {

}



const Sidebar: React.FC<SidebarProps> = (props) => {
    let [selectedItem, setSelectedItem] = useState(NavigationItemType.FEED);
    let [navItems, setNavItems] = useState<NavigationItem[]>([]);

    useEffect(() => {
        setNavItems(getNavItems());
    }, []);


    async function onItemClick(item: NavigationItem) {
        setSelectedItem(item.id);
    }


    function isSelected(id: NavigationItemType) {
        return id === selectedItem;
    }


    return <div className={`${props?.className} Sidebar bg-gray-dark`}>
        <div className={'mt-2'}>
            <img src={'/assets/images/logo.svg'} alt={'Instagram Logo'}
                 className={'w-8 ml-4 sm:mt-1 sm:ml-2 inline'}/>
            <img src={'/assets/images/logo-text.svg'} alt={'Instagram Logo Text'}
                 className={'sm:invisible w-32 ml-2 mt-2 inline'}/>
        </div>
        <ProfileInfo
          className={'mt-8'}
          name={'John Doe'}
          username={'@ananthrajsingh'}
          followerCount={2000}
          followingCount={67687976}
          postCount={23}
        />
        <div className={'mt-8'}>
            <For of={navItems} render={(item, index) => {
                return <NavItem
                  key={index}
                  onClick={onItemClick}
                  item={item}
                  isSelected={isSelected(item.id)}/>;
            }}/>
        </div>
    </div>;
};

export default Sidebar;
