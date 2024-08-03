module.exports = {
 run: [
	{
	  method: "shell.run",
	  params: {
		message: [
		  "git clone --single-branch --branch animals https://github.com/Lytanshade/LivePortrait.git app ",
		]
	  }
	},

	{
	  method: "script.start",
	  params: {
		uri: "torch.js",
		params: {
		  venv: "env",                
		  path: "app",               
		  // xformers: true   
		}
	  }
	},

	{
	  method: "shell.run",
	  params: {
		venv: "env",                
		path: "app",                
		message: [
		  "pip install gradio devicetorch",
		  "pip install -r {{platform==='darwin' ? 'requirements_macOS.txt' : 'requirements.txt'}}"
		]
	  }
	},
	
	{
	  method: "fs.download",
	  params: {
	    uri: [
		  "https://huggingface.co/lytanshade/insightface/resolve/main/det_10g.onnx",
		  "https://huggingface.co/lytanshade/insightface/resolve/main/2d106det.onnx"
	    ],
	    dir: "app/pretrained_weights/insightface/models/buffalo_l"
	  }
    },
    {
      method: "fs.download",
	  params: {
	    uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/landmark.onnx",
	    dir: "app/pretrained_weights/liveportrait"
	  }
    },
    {
	  method: "fs.download",
	  params: {
	    uri: [
		  "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/appearance_feature_extractor.pth",
		  "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/motion_extractor.pth",
		  "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/spade_generator.pth",
		  "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/base_models/warping_module.pth"
	    ],
	    dir: "app/pretrained_weights/liveportrait/base_models"
	  }
    },
    {
	  method: "fs.download",
	  params: {
	    uri: "https://huggingface.co/lytanshade/liveportrait/resolve/main/liveportrait/retargeting_models/stitching_retargeting_module.pth",
	    dir: "app/pretrained_weights/liveportrait/retargeting_models"
	  }
    },
    {
	  method: "fs.download",
	  params: {
	    uri: [
		  "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/base_models/appearance_feature_extractor.pth",
		  "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/base_models/motion_extractor.pth",
		  "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/base_models/spade_generator.pth",
		  "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/base_models/warping_module.pth"
	    ],
	    dir: "app/pretrained_weights/liveportrait_animals/base_models"
	  }
    },
    {
	  method: "fs.download",
	  params: {
	    uri: "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/retargeting_models/stitching_retargeting_module.pth",
	    dir: "app/pretrained_weights/liveportrait_animals/retargeting_models"
	  }
    },
     {
	  method: "fs.download",
	  params: {
	    uri: "https://huggingface.co/lytanshade/liveportrait_animals/resolve/main/xpose.pth",
	    dir: "app/pretrained_weights/liveportrait_animals"
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
