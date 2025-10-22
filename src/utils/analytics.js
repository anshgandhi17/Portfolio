// Google Analytics Event Tracking Utility

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track link clicks
export const trackLinkClick = (linkName, linkUrl, linkType = 'external') => {
  trackEvent('click', {
    event_category: 'Link',
    event_label: linkName,
    link_url: linkUrl,
    link_type: linkType
  });
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  trackEvent('social_click', {
    event_category: 'Social Media',
    event_label: platform,
    link_url: url
  });
};

// Track project interactions
export const trackProjectView = (projectTitle) => {
  trackEvent('project_view', {
    event_category: 'Project',
    event_label: projectTitle
  });
};

// Track resume download/view
export const trackResumeView = () => {
  trackEvent('resume_view', {
    event_category: 'Resume',
    event_label: 'Resume PDF Opened'
  });
};

// Track navigation
export const trackNavigation = (section) => {
  trackEvent('navigation', {
    event_category: 'Navigation',
    event_label: section
  });
};
