import os
import requests
from urllib.parse import urlparse

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def download_image(url, save_path):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {save_path}")
        else:
            print(f"Failed to download: {url}")
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")

# Base directory
base_dir = "eth_rwanda_imgs"
create_directory(base_dir)

# List of image URLs organized by category
images = {
    "awarding_ceremony": [
        "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405107.jpg",
        "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405003.jpg",
        "https://p2einferno.com/eth-rwanda/awarding_ceremony/photos/A7405093.jpg"
    ],
    "social_hour": [
        "https://p2einferno.com/eth-rwanda/eth_social_hour/A7404330-2-Enhanced-NR.jpg"
    ],
    "technical_workshop": [
        "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403818.JPG",
        "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403814.JPG",
        "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403826.JPG",
        "https://p2einferno.com/eth-rwanda/technical_workshop_4/pictures/A7403816.JPG",
        "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403752.jpg",
        "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403794.jpg",
        "https://p2einferno.com/eth-rwanda/technical_workshop_1/A7403790.jpg"
    ],
    "non_technical_workshop": [
        "https://p2einferno.com/eth-rwanda/non_technical_workshop_1/pictures/A7403599.JPG",
        "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403649-Enhanced-NR.jpeg",
        "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403646-Enhanced-NR.jpeg",
        "https://p2einferno.com/eth-rwanda/non_technical_workshop_part_2-photos/A7403663-Enhanced-NR.jpeg"
    ],
    "project_presentation": [
        "https://p2einferno.com/eth-rwanda/project_presentation/pictures/A7404598.jpg"
    ],
    "interview_thumbnails": [
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_katrina_chi.png",
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_first_team.png",
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_fourth_team.png",
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_rca_instructor.png",
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_2nd_team.png",
        "https://p2einferno.com/eth-rwanda/interview_thumbnails/interview_3rd_team.png"
    ]
}

# Download images
for category, urls in images.items():
    # Create category subdirectory
    category_dir = os.path.join(base_dir, category)
    create_directory(category_dir)
    
    # Download each image in the category
    for url in urls:
        # Get filename from URL
        filename = os.path.basename(urlparse(url).path)
        save_path = os.path.join(category_dir, filename)
        download_image(url, save_path)

print("Download complete!")