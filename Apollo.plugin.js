const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { getVersionedConfig } = require("@peacockproject/core/configSwizzleManager")

module.exports = function ApolloPlugin(controller) {
	log(LogLevel.INFO, "Loading Apollo Plugin...")
	const locations = controller.configManager.getVersionedConfig("LocationsData", "h3", false)
	locations.parents["LOCATION_PARENT_MOON"] = {
		Id: "LOCATION_PARENT_MOON",
		Guid: "fc8971e0-9a49-4366-88f0-3b58df97ff51",
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
			Icon: "images/locations/moon/tile.jpg",
			LockedIcon: "images/locations/moon/tile.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Background: "images/locations/moon/background.jpg",
			Order: 0,
			LimitedLoadout: false,
			NormalLoadoutUnlock: "",
			ProgressionKey: "LOCATION_MOON",
			Season: 1,
			RequiredResources: [
				"[assembly:/_pro/scenes/missions/apollo/mission_moonbase/scene_moonbase.entity].entitytemplate"
			],
			Entitlements: []
		}
	}
	locations.children["LOCATION_MOONBASE"] = {
		Id: "LOCATION_MOONBASE",
		Guid: "cf495e50-0ae3-447c-bf9e-8c4a4f6d7014",
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
			ParentLocation: "LOCATION_PARENT_MOON",
			Icon: "images/apollo/moonbase/tile.jpg",
			LockedIcon: "images/apollo/moonbase/tile.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Background: "images/apollo/moonbase/background.jpg",
			Order: 0,
			LimitedLoadout: false,
			ProgressionKey: "LOCATION_MOONBASE",
			CreateContractId: "20f20f02-6b05-46ae-a1bd-f48c9f2d11ee",
			HideProgression: false,
			RequiredResources: ["[assembly:/_pro/scenes/missions/apollo/moonbase/scene_moonbase.entity].entitytemplate"],
			Entitlements: []
		}
	}
	controller.missionsInLocations["LOCATION_MOONBASE"] = ["a7bd44d6-2545-45f8-a716-922e74670cca"]

	const userDefault = getVersionedConfig("UserDefault", "h3", false)
	userDefault.Extensions.progression.Locations["LOCATION_PARENT_MOON"] = {
		Xp: 0,
		Level: 0,
		PreviouslySeenXp: 0
	}
	controller.addMission({
		Data: {
			EnableSaving: true,
			Objectives: [
				{
					Id: "26fdc2ac-7b4f-4403-a18b-4db04c1756cb",
					Category: "primary",
					ObjectiveType: "setpiece",
					DisplayAsKillObjective: true,
					ForceShowOnLoadingScreen: true,
					IsHidden: false,
					BriefingName: "$($repository 36669e22-7dda-4eac-ac40-0c5a9dcd4f33).Name",
					Image: "images/apollo/moonbase/luke_starkiller.jpg",
					HUDTemplate: {
						display: "Eliminate Luke Starkiller"
					},
					BriefingText: "Eliminate Luke Starkiller",
					SuccessEvent: {
						EventName: "Kill",
						EventValues: {
							RepositoryId: "36669e22-7dda-4eac-ac40-0c5a9dcd4f33"
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
			Entrances: ["f1d618f3-1906-43a4-8e5c-01a4816a96bb"],
			GameChangers: [],
			GameChangerReferences: []
		},
		Metadata: {
			Id: "a7bd44d6-2545-45f8-a716-922e74670cca",
			IsPublished: true,
			Title: "UI_MOONBASE_TITLE",
			Description: "UI_MOONBASE_DESC",
			CodeName_Hint: "Moonbase",
			ScenePath: "assembly:/_pro/scenes/missions/apollo/mission_moonbase/scene_moonbase.entity",
			TileImage: "images/apollo/moonbase/tile.jpg",
			Location: "LOCATION_MOONBASE",
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
		"assembly:/_pro/scenes/missions/apollo/mission_moonbase/scene_moonbase.entity"
	] = ["f1d618f3-1906-43a4-8e5c-01a4816a96bb"]
	controller.hooks.contributeCampaigns.tap(
		"ApolloPlugin",
		(campaigns, genSingleMissionFunc, genSingleVideoFunc, gameVersion) => {
			const storyData = [genSingleMissionFunc("a7bd44d6-2545-45f8-a716-922e74670cca", gameVersion)]

			const campaignTemplate = {
				Type: "",
				BackgroundImage: "images/apollo/apollo_tile.jpg",
				Image: "",
				Name: "UI_APOLLO",
				Properties: {
					BackgroundImage: "images/apollo/apollo_tile.jpg"
				},
				StoryData: storyData
			}

			campaigns.push(campaignTemplate)
		}
	)
	log(LogLevel.INFO, "Done loading Apollo Plugin.")
}
