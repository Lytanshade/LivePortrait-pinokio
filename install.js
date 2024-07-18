module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Lytanshade/LivePortrait.git app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
           "pip install gradio devicetorch",
	   "pip install -r ../requirements.txt",
           "{{platform === 'darwin' ? 'pip install onnxruntime-silicon==1.16.3'}}",
	   "pip install tyro==0.8.5",
           
        ]
      }
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
    //  {
    //    method: "fs.link",
    //    params: {
    //      venv: "app/env"
    //    }
    //  },
	
	 {
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/insightface/resolve/main/det_10g.onnx",
		dir: "app/pretrained_weights/insightface/models/buffalo_l"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/insightface/resolve/main/2d106det.onnx",
		dir: "app/pretrained_weights/insightface/models/buffalo_l"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/landmark.onnx",
		dir: "app/pretrained_weights/liveportrait"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/appearance_feature_extractor.pth",
		dir: "app/pretrained_weights/liveportrait/base_models"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/motion_extractor.pth",
		dir: "app/pretrained_weights/liveportrait/base_models"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/spade_generator.pth",
		dir: "app/pretrained_weights/liveportrait/base_models"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/warping_module.pth",
		dir: "app/pretrained_weights/liveportrait/base_models"
		}
	},{
		method: "fs.download",
		params: {
		uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/retargeting_models/stitching_retargeting_module.pth",
		dir: "app/pretrained_weights/liveportrait/retargeting_models"
		}
	},
  
  
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
