import React, { ChangeEvent } from 'react';
import preview from "./../assets/PSNP_CCR.png"
import { HasPercentage } from '../util/types';

interface AverageCompletionProps extends HasPercentage {
  onChange: (average: number) => void
}

function AverageCompletion(props: AverageCompletionProps) {
  return <div className="mt-1 shadow rounded-lg infopanel">
    <div className="px-4 py-5 sm:p-6">
      <Label />
      <Form {...props} />
      <Description />
      <ImagePreview />
    </div>
  </div>
}

function Label(): JSX.Element {
  return <h3 className="text-base font-semibold leading-6">
    Enter Game Average Completion
  </h3>
}

function Form(props: AverageCompletionProps): JSX.Element {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(parseInt(e.target.value, 10))
  }

  return <form className="mt-2 sm:flex sm:items-center">
    <div className="relative rounded-md shadow-sm w-24">
      <input
        name="percentage"
        type="number"
        min="0"
        max="100"
        className="border-0 w-full app-bg px-1.5 py-1.5 text-white focus:ring-0 sm:text-sm sm:leading-6"
        value={props.percentage}
        onChange={onChange}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span className="text-white sm:text-sm">
          %
        </span>
      </div>
    </div>
  </form>
}

function Description(): JSX.Element {
  return <div className="mt-2 max-w-xl text-sm">
    <p>
      The average completion percentage for a game can be found on <a className="text-blue-600" href="https://psnprofiles.com/games">PSNProfiles</a>.
    </p>
  </div>
}

function ImagePreview(): JSX.Element {
  return <details className="text-sm">
    <summary>Image preview</summary>
    <img src={preview} alt="location" />
  </details>
}

export default AverageCompletion;
