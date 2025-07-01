import React from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    name: string;
    emotion?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name, emotion }) => {
    return (
        <div className="avatar-container">
            <img
                src={src}
                alt={alt}
                className={`character-avatar ${name}-avatar ${emotion ? `emotion-${emotion}` : ''}`}
            />
            <style jsx>{`
        .avatar-container {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #ddd;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .character-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }
        
        .watashi-avatar {
          border-color: #ff69b4;
        }
        
        .tenchou-avatar {
          border-color: #4169e1;
        }
        
        .emotion-excited .avatar-container {
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(0, 255, 0, 0.3);
        }
        
        .emotion-angry .avatar-container {
          box-shadow: 0 4px 16px rgba(255, 0, 0, 0.3);
        }
        
        .emotion-happy .avatar-container {
          box-shadow: 0 4px 16px rgba(255, 255, 0, 0.3);
        }
        
        .emotion-confused .avatar-container {
          opacity: 0.8;
        }
        
        .emotion-tired .avatar-container {
          opacity: 0.7;
          filter: grayscale(20%);
        }
        
        .emotion-embarrassed .avatar-container {
          box-shadow: 0 4px 16px rgba(255, 192, 203, 0.3);
        }
        
        .emotion-thoughtful .avatar-container {
          box-shadow: 0 4px 16px rgba(0, 0, 255, 0.3);
        }
        
        .emotion-curious .avatar-container {
          box-shadow: 0 4px 16px rgba(255, 165, 0, 0.3);
        }
      `}</style>
        </div>
    );
};
