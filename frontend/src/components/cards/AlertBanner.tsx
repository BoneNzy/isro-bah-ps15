type AlertBannerProps = {
  message: string;
};

const AlertBanner = ({ message }: AlertBannerProps) => {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900">
      <span className="font-semibold">Alert:</span> {message}
    </div>
  );
};

export default AlertBanner;