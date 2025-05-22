const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { getVersionedConfig } = require("@peacockproject/core/configSwizzleManager")

module.exports = function hitmanCampaignDemoPlugin(controller) {
	log(LogLevel.INFO, "Loading HitmanCampaignDemo Plugin...")
	controller.addMission({
		Data: {
			EnableSaving: true,
			Objectives: [
				{
					Id: "e75478f8-36e2-464d-b2ac-f5b3bcfe0725",
					Category: "primary",
					ObjectiveType: "setpiece",
					DisplayAsKillObjective: true,
					ForceShowOnLoadingScreen: true,
					IsHidden: false,
					BriefingName: "$($repository 6bffc1f0-6039-4862-b821-027a5dad3bae).Name",
					Image: "images/campaign_demo/bank/target_mc_targetface.jpg",
					HUDTemplate: {
						display: "Eliminate Target McTargetface"
					},
					BriefingText: "Eliminate Target McTargetface",
					SuccessEvent: {
						EventName: "Kill",
						EventValues: {
							RepositoryId: "6bffc1f0-6039-4862-b821-027a5dad3bae"
						}
					}
				}
			],
			GameDifficulties: [
				{
					Difficulty: "easy",
					Bricks: []
				},
				{
					Difficulty: "normal",
					Bricks: []
				},
				{
					Difficulty: "hard",
					Bricks: []
				}
			],
			Bricks: [],
			DevOnlyBricks: [],
			Entrances: ["6ba75011-7675-4843-9b9b-3e3618c30c97"],
			GameChangers: [],
			GameChangerReferences: []
		},
		Metadata: {
			Id: "f71db402-38ef-4af6-b35b-34eedf432c87",
			IsPublished: true,
			Title: "UI_BANK_TITLE",
			Description: "UI_BANK_DESC",
			CodeName_Hint: "New York",
			ScenePath: "assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity",
			TileImage: "images/campaign_demo/bank/tile.jpg",
			Location: "LOCATION_GREEDY_RACCOON",
			LastUpdate: "2025-05-02T19:44:00.000Z",
			CreationTimestamp: "2025-05-02T19:44:00.000Z",
			CreatorUserId: "a38f1dce-a7af-4a3c-a47a-5a94db8c0ed9",
			Type: "mission",
			Release: "3.0.0",
			Entitlements: ["H2_LEGACY_EXPANSION"]
		},
		UserData: {},
		SMF: {}
	})
	controller.configManager.configs["Entrances"][
		"assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity"
	] = ["6ba75011-7675-4843-9b9b-3e3618c30c97"]
	const locations = controller.configManager.getVersionedConfig("LocationsData", "h3", false)
	locations.parents["LOCATION_PARENT_MODLANDIA"] = {
		Id: "LOCATION_PARENT_MODLANDIA",
		Guid: "c023b8bb-950a-4008-8270-adde38b48ebc",
		DisplayNameLocKey: "",
		GameAsset: "",
		Type: "location",
		Subtype: "location",
		RMTPrice: -1,
		GamePrice: -1,
		IsPurchasable: false,
		IsPublished: true,
		IsDroppable: false,
		Capabilities: [],
		Qualities: {},
		Properties: {
			Icon: "images/locations/modlandia/tile.jpg",
			LockedIcon: "images/locations/modlandia/tile.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Background: "images/locations/modlandia/background.jpg",
			Order: 0,
			LimitedLoadout: false,
			NormalLoadoutUnlock: "",
			ProgressionKey: "LOCATION_MODLANDIA",
			Season: 1,
			RequiredResources: [
				"[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity].entitytemplate"
			],
			Entitlements: []
		}
	}
	locations.children["LOCATION_MODTOWN"] = {
		Id: "LOCATION_MODTOWN",
		Guid: "0751ae96-2fe5-4026-b517-28ccdc4083a9",
		Type: "location",
		Subtype: "sublocation",
		RMTPrice: -1,
		GamePrice: -1,
		IsPurchasable: false,
		IsPublished: true,
		IsDroppable: false,
		Capabilities: [],
		Qualities: {},
		Properties: {
			ParentLocation: "LOCATION_PARENT_MODLANDIA",
			Icon: "images/campaign_demo/modtown/tile.jpg",
			LockedIcon: "images/campaign_demo/modtown/tile.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Background: "images/campaign_demo/modtown/background.jpg",
			Order: 0,
			LimitedLoadout: false,
			ProgressionKey: "LOCATION_MODTOWN",
			CreateContractId: "4ade834f-4c61-497b-8fbe-05bb0dfa2244",
			HideProgression: false,
			RequiredResources: [
				"[assembly:/_pro/scenes/missions/campaign_demo/modtown/scene_modtown.entity].entitytemplate"
			],
			Entitlements: []
		}
	}
	controller.missionsInLocations["LOCATION_MODTOWN"] = ["6b7459e0-7dd8-4ef4-9747-61458f9d7da9"]

	const userDefault = getVersionedConfig("UserDefault", "h3", false)
	userDefault.Extensions.progression.Locations["LOCATION_PARENT_MODLANDIA"] = {
		Xp: 0,
		Level: 0,
		PreviouslySeenXp: 0
	}
	controller.addMission({
		Data: {
			EnableSaving: true,
			Objectives: [
				{
					Id: "8c0ef36d-596f-43b5-9683-f42fa23ffbb6",
					Category: "primary",
					ObjectiveType: "setpiece",
					DisplayAsKillObjective: true,
					ForceShowOnLoadingScreen: true,
					IsHidden: false,
					BriefingName: "$($repository 3ad08b0b-5338-4455-9d02-5a5ac08a2276).Name",
					Image: "images/campaign_demo/modtown/super_targetman.jpg",
					HUDTemplate: {
						display: "Eliminate Super Targetman"
					},
					BriefingText: "Eliminate Super Targetman",
					SuccessEvent: {
						EventName: "Kill",
						EventValues: {
							RepositoryId: "3ad08b0b-5338-4455-9d02-5a5ac08a2276"
						}
					}
				}
			],
			GameDifficulties: [
				{
					Difficulty: "easy",
					Bricks: []
				},
				{
					Difficulty: "normal",
					Bricks: []
				},
				{
					Difficulty: "hard",
					Bricks: []
				}
			],
			Bricks: [],
			DevOnlyBricks: [],
			Entrances: ["0cd9e0da-774d-4dd5-adb2-a45d31416cad"],
			GameChangers: [],
			GameChangerReferences: []
		},
		Metadata: {
			Id: "6b7459e0-7dd8-4ef4-9747-61458f9d7da9",
			IsPublished: true,
			Title: "UI_MODTOWN_TITLE",
			Description: "UI_MODTOWN_DESC",
			CodeName_Hint: "Modtown",
			ScenePath: "assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity",
			TileImage: "images/campaign_demo/modtown/tile.jpg",
			Location: "LOCATION_MODTOWN",
			LastUpdate: "2025-05-02T19:44:00.000Z",
			CreationTimestamp: "2025-05-02T19:44:00.000Z",
			CreatorUserId: "a38f1dce-a7af-4a3c-a47a-5a94db8c0ed9",
			Type: "mission",
			Release: "3.0.0",
			Entitlements: ["H2_LEGACY_EXPANSION"]
		},
		UserData: {},
		SMF: {}
	})
	controller.configManager.configs["Entrances"][
		"assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity"
	] = ["0cd9e0da-774d-4dd5-adb2-a45d31416cad"]
	controller.hooks.contributeCampaigns.tap(
		"HitmanCampaignDemoPlugin",
		(campaigns, genSingleMissionFunc, genSingleVideoFunc, gameVersion) => {
			const storyData = [
				genSingleMissionFunc("f71db402-38ef-4af6-b35b-34eedf432c87", gameVersion),
				genSingleMissionFunc("6b7459e0-7dd8-4ef4-9747-61458f9d7da9", gameVersion)
			]

			const campaignTemplate = {
				Type: "",
				BackgroundImage: "images/campaign_demo/campaign_demo_tile.jpg",
				Image: "",
				Name: "UI_HITMAN_CAMPAIGN_DEMO",
				Properties: {
					BackgroundImage: "images/campaign_demo/campaign_demo_tile.jpg"
				},
				StoryData: storyData
			}

			campaigns.push(campaignTemplate)
		}
	)

	controller.hooks.getNextCampaignMission.tap("HitmanCampaignDemoPlayNextAdditions", (contractId, gameVersion) => {
		if (contractId !== "f71db402-38ef-4af6-b35b-34eedf432c87") {
			return
		}

		return {
			nextContractId: "6b7459e0-7dd8-4ef4-9747-61458f9d7da9",
			campaignDetails: {
				CampaignName: "UI_HITMAN_CAMPAIGN_DEMO",
				ParentCampaignName: null
			}
		}
	})
	log(LogLevel.INFO, "Done loading HitmanCampaignDemo Plugin.")
}
