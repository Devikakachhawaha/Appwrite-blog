import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
  name={name || "content"}
  control={control}
  render={({ field: { onChange, value } }) => (
    <CKEditor
      editor={ClassicEditor}
      data={defaultValue}
      config={{
        toolbar: [
          'undo', 'redo', '|', 'heading', '|',
          'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|',
          'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
          'mediaEmbed', 'insertImage'
        ],
        image: {
          toolbar: [
            'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells'
          ]
        }
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  )}
/>

    </div>
  );
}

