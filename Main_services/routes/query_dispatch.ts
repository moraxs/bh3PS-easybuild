import { Request, Response } from "express";
import config from "../config";

export default function handler(req: Request, res: Response) {
	return res.send(JSON.stringify({
		region_list: [
			{
				dispatch_url:
					`https://${config.serverHost}/query_gateway`,
				ext: {
					ai_use_asset_boundle: "1",
					apm_log_dest: "2",
					apm_log_level: "4",
					apm_switch: "1",
					apm_switch_crash: "1",
					apm_switch_game_log: "1",
					block_error_dialog: "0",
					elevator_model_path: "GameEntry/EVA/StartLoading_Model",
					ex_res_buff_size: "10485760",
					ex_res_pre_publish: "0",
					ex_res_use_http: "1",
					ex_resource_url_list: [
						"hk-bigfile-os-mihayo.akamaized.net/com.miHoYo.bh3oversea",
						"bigfile-aliyun-os.honkaiimpact3.com/com.miHoYo.bh3oversea",
					],
					is_xxxx: "0",
					mtp_switch: "0",
					network_feedback_enable: "0",
					res_use_asset_boundle: "0",
					show_bulletin_button: "0",
					show_bulletin_empty_dialog_bg: "0",
					show_version_text: "1",
					update_streaming_asb: "0",
					use_multy_cdn: "0",
				},
				name: config.regionName,
				retcode: 0,
				title: config.regionName,
			},
		],
		retcode: 0,
	}));
}
