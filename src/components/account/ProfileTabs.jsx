import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [sliderStyle, setSliderStyle] = useState({});

  const tabs = [
    { id: 'general', title: 'General', path: '/profile' },
    { id: 'close', title: 'Close account', path: '/profile/close' },
  ];

  const tabsRefs = useRef({});

  useEffect(() => {
    const currentTabElement = tabsRefs.current[activeTab];

    if (currentTabElement) {
      setSliderStyle({
        left: currentTabElement.offsetLeft,
        width: currentTabElement.offsetWidth,
      });
    }
  }, []);

  const movieSlider = (e, tab) => {
    setActiveTab(tab);
    const element = e.target;
    setSliderStyle({ left: element.offsetLeft, width: element.offsetWidth });
  };

  return (
    <div className="px-8 py-4 pt-4 border-b">
      <div className="relative flex gap-8 font-semibold ">
        {tabs.map(tab => (
          <Link
            onClick={e => {
              movieSlider(e, tab.title);
            }}
            ref={el => (tabsRefs.current[tab.title] = el)}
            key={tab.id}
            to={tab.path}
            className={`${activeTab === tab.title ? `text-primary` : ``}`}
          >
            {tab.title}
          </Link>
        ))}

        <div className={`w-16 h-[2px] bg-primary rounded-full top-[39.5px] transition-all duration-300 ease-in-out absolute`} style={sliderStyle}></div>
      </div>
    </div>
  );
};

export default ProfileTabs;
