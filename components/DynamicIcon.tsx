"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
}

// Brand color mappings for automatic styling
const BRAND_COLORS: Record<string, string> = {
  faAmazon: "text-yellow-500",
  faSpotify: "text-green-600", 
  faYoutube: "text-red-600",
  faGithub: "text-gray-600",
  faGoogle: "text-blue-400",
  faDiscord: "text-purple-700",
  faTelegram: "text-blue-500",
  faBluesky: "text-blue-300",
  faTwitter: "text-blue-400",
  faFacebook: "text-blue-600",
  faInstagram: "text-pink-500",
  faLinkedin: "text-blue-700",
  faTiktok: "text-black",
  faReddit: "text-orange-600",
  faApple: "text-gray-600",
  faMicrosoft: "text-blue-500",
  faSlack: "text-purple-600",
  faDropbox: "text-blue-500",
  faPaypal: "text-blue-600",
  faStripe: "text-purple-600",
  faCloudBolt: "text-yellow-500",
  faTriangleExclamation: "text-red-500",
  faBookAtlas: "text-orange-500",
  faChalkboardUser: "text-green-600",
};

// Default color for non-brand icons
const DEFAULT_COLOR = "text-gray-600";

// Cache for loaded icons to avoid re-imports
const iconCache = new Map<string, IconDefinition>();

// Dynamic icon loader
const loadIcon = async (iconName: string): Promise<IconDefinition | null> => {
  // Check cache first
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName)!;
  }

  try {
    // Try brand icons first (most common for links)
    try {
      const brandModule = await import(`@fortawesome/free-brands-svg-icons`);
      if (brandModule[iconName]) {
        const icon = brandModule[iconName] as IconDefinition;
        iconCache.set(iconName, icon);
        return icon;
      }
    } catch (brandError) {
      // Brand icon not found, continue to solid icons
    }

    // Try solid icons
    try {
      const solidModule = await import(`@fortawesome/free-solid-svg-icons`);
      if (solidModule[iconName]) {
        const icon = solidModule[iconName] as IconDefinition;
        iconCache.set(iconName, icon);
        return icon;
      }
    } catch (solidError) {
      // Solid icon not found, continue to regular icons
    }

    // Try regular icons
    try {
      const regularModule = await import(`@fortawesome/free-regular-svg-icons`);
      if (regularModule[iconName]) {
        const icon = regularModule[iconName] as IconDefinition;
        iconCache.set(iconName, icon);
        return icon;
      }
    } catch (regularError) {
      // Regular icon not found
    }

    console.warn(`Icon "${iconName}" not found in any FontAwesome package`);
    return null;
  } catch (error) {
    console.error(`Error loading icon "${iconName}":`, error);
    return null;
  }
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ 
  name, 
  className = "",
  size = "1x"
}) => {
  const [icon, setIcon] = useState<IconDefinition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIconAsync = async () => {
      setLoading(true);
      const loadedIcon = await loadIcon(name);
      setIcon(loadedIcon);
      setLoading(false);
    };

    loadIconAsync();
  }, [name]);

  // Auto-apply brand color if available, otherwise use provided className or default
  const autoColor = BRAND_COLORS[name] || DEFAULT_COLOR;
  const finalClassName = className.includes('text-') 
    ? className  // Use provided color if specified
    : `${autoColor} ${className}`;

  // Show loading state or fallback
  if (loading) {
    return (
      <div className={`inline-block ${finalClassName}`} style={{ width: '1em', height: '1em' }}>
        {/* Simple loading placeholder */}
        <div className="animate-pulse bg-gray-300 rounded w-full h-full"></div>
      </div>
    );
  }

  if (!icon) {
    // Fallback to question mark icon
    return (
      <FontAwesomeIcon 
        icon={faQuestion} 
        className={`${DEFAULT_COLOR} ${className}`}
        size={size}
      />
    );
  }

  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={finalClassName}
      size={size}
    />
  );
};

export default DynamicIcon;