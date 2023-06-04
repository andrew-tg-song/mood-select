interface bannerProps {
  eventBannerImg: string;
}

export default function EventBanner({ eventBannerImg }: bannerProps) {
  return (
    <div className="w-[81.25rem] mb-[140px] mx-auto">
      <img className="w-[100%] object-cover" src={eventBannerImg} />
    </div>
  );
}
