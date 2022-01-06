import {SpinnerRoundFilled} from 'spinners-react';

interface Props {
  enabled: boolean;
}

const Spinner = (props: Props) => {
  const {enabled} = props;

  return (
    <div className={'spinner-loader'}>
      <SpinnerRoundFilled size={70} color={'#33BFA0'} enabled={enabled} />
    </div>
  );
};

export default Spinner;
