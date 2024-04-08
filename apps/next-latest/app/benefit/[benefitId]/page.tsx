import { Metadata } from 'next';

type TServerProps = {
  params: {
    benefitId: string;
  };
  searchParams: {
    userId?: string;
    type?: string;
    shareInfo?: string;
  };
};

const getBenefitData = async (benefitId?: string, userId?: string) => {
  const data = await fetch(
    `https://dev-api.lifeplus-tribes.com/composite/api/v2/benefit/${benefitId}/app-benefit-detail${userId ? `?userId=${userId}` : ''}`,
  );
  return data.json();
};

export async function generateMetadata({
  params,
}: TServerProps): Promise<Metadata> {
  const { benefitId } = params;
  const data = await getBenefitData(benefitId);

  return {
    title: data.title,
    description: '',
    openGraph: {
      type: 'website',
      url: data.shareImage,
      title: data.title,
      description: data.subTitle || '',
      siteName: 'LIFEPLUS TRIBES',
      images: [
        {
          url: data.shareImage,
          width: 1200,
          height: 600,
        },
      ],
    },
  };
}

export async function BenefitPage({ params }: TServerProps) {
  const benefitId = params.benefitId;
  const initialData = await getBenefitData(benefitId);

  return <>{initialData.toString()}</>;
}

export default BenefitPage;
