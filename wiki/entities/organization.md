---
logical: "organization"
display: "Organization"
entitySetName: "organizations"
primaryId: "organizationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["organizzazione dataverse", "tenant", "ambiente"]
synonyms_en: ["organization", "tenant", "environment"]
---

# Organization

Top level of the Microsoft Dynamics 365 business hierarchy. The organization can be a specific business, holding company, or corporation.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organization` |
| Display name | Organization |
| Display (plural) | Organizations |
| Schema name | `Organization` |
| Entity set (Web API) | `organizations` |
| Primary id attribute | `organizationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizations?$select=name&$top=10
GET /api/data/v9.2/organizations(<guid>)
POST /api/data/v9.2/organizations
PATCH /api/data/v9.2/organizations(<guid>)
DELETE /api/data/v9.2/organizations(<guid>)
```

## Attributes

Writable: **471** · Read-only: **34**

### Writable

`ACIWebEndpointUrl`, `AcknowledgementTemplateId`, `ActivityTypeFilter`, `ActivityTypeFilterV2`, `AdvancedColumnEditorEnabled`, `AdvancedColumnFilteringEnabled`, `AdvancedFilteringEnabled`, `AdvancedLookupEnabled`, `AdvancedLookupInEditFilter`, `AiPromptsAzureAIFoundryModelTypesEnabled`, `AiPromptsBasicModelTypesEnabled`, `AiPromptsEnabled`, `AiPromptsPremiumModelTypesEnabled`, `AiPromptsStandardModelTypesEnabled`, `AllowAddressBookSyncs`, `AllowApplicationUserAccess`, `AllowAutoResponseCreation`, `AllowAutoUnsubscribe`, `AllowAutoUnsubscribeAcknowledgement`, `AllowClientMessageBarAd`, `AllowConnectorsOnPowerFXActions`, `AllowedApplicationsForDVAccess`, `AllowedIpRangeForFirewall`, `AllowedIpRangeForStorageAccessSignatures`, `AllowedListOfIpRangesForFirewall`, `AllowedMimeTypes`, `AllowedServiceTagsForFirewall`, `AllowEntityOnlyAudit`, `AllowLeadingWildcardsInGridSearch`, `AllowLeadingWildcardsInQuickFind`, `AllowLegacyClientExperience`, `AllowLegacyDialogsEmbedding`, `AllowMarketingEmailExecution`, `AllowMicrosoftTrustedServiceTags`, `AllowOfflineScheduledSyncs`, `AllowOutlookScheduledSyncs`, `AllowRedirectAdminSettingsToModernUI`, `AllowUnresolvedPartiesOnEmailSend`, `AllowUserFormModePreference`, `AllowUsersHidingSystemViews`, `AllowUsersSeeAppdownloadMessage`, `AllowVirtualEntityPluginExecutionOnNestedPipeline`, `AllowWebExcelExport`, `AMDesignator`, `AppDesignerExperienceEnabled`, `ApplicationBasedAccessControlMode`, `AppointmentRichEditorExperience`, `AppointmentWithTeamsMeeting`, `AppointmentWithTeamsMeetingV2`, `AreAutomationCenterPreviewFeaturesEnabled`, `AreProcessInsightsPreviewFeaturesEnabled`, `AuditRetentionPeriod`, `AuditRetentionPeriodV2`, `AuditSettings`, `AutoApplyDefaultonCaseCreate`, `AutoApplyDefaultonCaseUpdate`, `AutoApplySLA`, `AzureSchedulerJobCollectionName`, `BaseCurrencyId`, `BingMapsApiKey`, `BlockAccessToSessionTranscriptsForCopilotStudio`, `BlockCopilotAuthorAuthentication`, `BlockedApplicationsForDVAccess`, `BlockedAttachments`, `BlockedMimeTypes`, `BlockTranscriptRecordingForCopilotStudio`, `BlockUrlsInResponsesForCopilotStudio`, `BoundDashboardDefaultCardExpanded`, `BulkOperationPrefix`, `BusinessCardOptions`, `BusinessClosureCalendarId`, `CalendarType`, `CampaignPrefix`, `CanOptOutNewSearchExperience`, `CascadeStatusUpdate`, `CasePrefix`, `CategoryPrefix`, `ClientFeatureSet`, `ContentSecurityPolicyConfiguration`, `ContentSecurityPolicyConfigurationForCanvas`, `ContentSecurityPolicyOptions`, `ContentSecurityPolicyReportUri`, `ContractPrefix`, `CopresenceRefreshRate`, `CortanaProactiveExperienceEnabled`, `CreateProductsWithoutParentInActiveState`, `CuaFlowLogsTtlInMinutes`, `CuaFlowLogsVerbosity`, `CurrencyDecimalPrecision`, `CurrencyDisplayOption`, `CurrencyFormatCode`, `CurrencySymbol`, `CurrentBulkOperationNumber`, `CurrentCampaignNumber`, `CurrentCaseNumber`, `CurrentCategoryNumber`, `CurrentContractNumber`, `CurrentInvoiceNumber`, `CurrentKaNumber`, `CurrentKbNumber`, `CurrentOrderNumber`, `CurrentQuoteNumber`, `DateFormatCode`, `DateFormatString`, `DateSeparator`, `DaysBeforeEmailDescriptionIsMigrated`, `DaysBeforeInactiveTeamsChatSyncDisabled`, `DecimalSymbol`, `DefaultCountryCode`, `DefaultCrmCustomName`, `DefaultEmailServerProfileId`, `DefaultEmailSettings`, `DefaultMobileOfflineProfileId`, `DefaultRecurrenceEndRangeType`, `DefaultThemeData`, `DelegatedAdminUserId`, `DesktopFlowQueueLogsTtlInMinutes`, `DesktopFlowRunActionLogsStatus`, `DesktopFlowRunActionLogVerbosity`, `DesktopFlowRunActionLogVersion`, `DisableSocialCare`, `DisableSystemLabelsCacheSharing`, `DiscountCalculationMethod`, `DisplayNavigationTour`, `EmailConnectionChannel`, `EmailCorrelationEnabled`, `EmailSendPollingPeriod`, `EnableAsyncMergeAPIForUCI`, `EnableBingMapsIntegration`, `EnableCanvasAppsInSolutionsByDefault`, `EnableCopilotStudioCrossGeoShareDataWithVivaInsights`, `EnableCopilotStudioShareDataWithVI`, `EnableCopilotStudioShareDataWithVivaInsights`, `EnableEnvironmentSettingsApp`, `EnableFlowsInSolutionByDefault`, `EnableFlowsInSolutionByDefaultGracePeriod`, `EnableImmersiveSkypeIntegration`, `EnableIpBasedCookieBinding`, `EnableIpBasedFirewallRule`, `EnableIpBasedFirewallRuleInAuditMode`, `EnableIpBasedStorageAccessSignatureRule`, `EnableLivePersonaCardUCI`, `EnableLivePersonCardIntegrationInOffice`, `EnableLPAuthoring`, `EnableMakerSwitchToClassic`, `EnableMicrosoftFlowIntegration`, `EnablePricingOnCreate`, `EnableSensitivityLabels`, `EnableSmartMatching`, `EnableUnifiedClientCDN`, `EnableUnifiedInterfaceShellRefresh`, `EnforceReadOnlyPlugins`, `EntityImage`, `ExpireChangeTrackingInDays`, `ExpireSubscriptionsInDays`, `ExternalBaseUrl`, `ExternalPartyCorrelationKeys`, `ExternalPartyEntitySettings`, `FeatureSet`, `FiscalCalendarStart`, `FiscalPeriodFormat`, `FiscalPeriodFormatPeriod`, `FiscalPeriodType`, `FiscalYearDisplayCode`, `FiscalYearFormat`, `FiscalYearFormatPrefix`, `FiscalYearFormatSuffix`, `FiscalYearFormatYear`, `FiscalYearPeriodConnect`, `FlowLogsTtlInMinutes`, `FlowRunTimeToLiveInSeconds`, `FullNameConventionCode`, `FutureExpansionWindow`, `GenerateAlertsForErrors`, `GenerateAlertsForInformation`, `GenerateAlertsForWarnings`, `GetStartedPaneContentEnabled`, `GlobalAppendUrlParametersEnabled`, `GlobalHelpUrl`, `GlobalHelpUrlEnabled`, `GoalRollupExpiryTime`, `GoalRollupFrequency`, `GrantAccessToNetworkService`, `HashDeltaSubjectCount`, `HashFilterKeywords`, `HashMaxCount`, `HashMinAddressCount`, `HighContrastThemeData`, `IgnoreInternalEmail`, `ImproveSearchLoggingEnabled`, `InactivityTimeoutEnabled`, `InactivityTimeoutInMins`, `InactivityTimeoutReminderInMins`, `IncomingEmailExchangeEmailRetrievalBatchSize`, `InitialVersion`, `IntegrationUserId`, `InvoicePrefix`, `IpBasedStorageAccessSignatureMode`, `IsActionCardEnabled`, `IsActionSupportFeatureEnabled`, `IsActivityAnalysisEnabled`, `IsAppMode`, `IsAppointmentAttachmentSyncEnabled`, `IsAssignedTasksSyncEnabled`, `IsAuditEnabled`, `IsAutoDataCaptureEnabled`, `IsAutoDataCaptureV2Enabled`, `IsAutoInstallAppForD365InTeamsEnabled`, `IsAutoSaveEnabled`, `IsBaseCardStaticFieldDataEnabled`, `IsBasicGeospatialIntegrationEnabled`, `IsBPFEntityCustomizationFeatureEnabled`, `IsCloudFlowSavingsEnabled`, `IsCollaborationExperienceEnabled`, `IsComputerUseInMCSEnabled`, `IsConflictDetectionEnabledForMobileClient`, `IsContactMailingAddressSyncEnabled`, `IsContentSecurityPolicyEnabled`, `IsContentSecurityPolicyEnabledForCanvas`, `IsContextualEmailEnabled`, `IsContextualHelpEnabled`, `IsCopilotFeedbackEnabled`, `IsCuaOnHmgV2Enabled`, `IsCustomControlsInCanvasAppsEnabled`, `IsDefaultCountryCodeCheckEnabled`, `IsDelegateAccessEnabled`, `IsDelveActionHubIntegrationEnabled`, `IsDesktopFlowConnectionEmbeddingEnabled`, `IsDesktopFlowRuntimeRepairAttendedEnabled`, `IsDesktopFlowRuntimeRepairUnattendedEnabled`, `IsDesktopFlowSavingsEnabled`, `IsDesktopFlowSchemaV2Enabled`, `IsDesktopFlowVanillaImageSharingEnabled`, `IsDesktopFlowVersionControlEnabled`, `IsDesktopFlowVersionControlEnabledByDefault`, `IsDuplicateDetectionEnabled`, `IsDuplicateDetectionEnabledForImport`, `IsDuplicateDetectionEnabledForOfflineSync`, `IsDuplicateDetectionEnabledForOnlineCreateUpdate`, `IsEmailAddressValidationEnabled`, `IsEmailMonitoringAllowed`, `IsEmailServerProfileContentFilteringEnabled`, `IsEnabledForAllRoles`, `IsExternalFileStorageEnabled`, `IsExternalSearchIndexEnabled`, `IsFiscalPeriodMonthBased`, `IsFolderAutoCreatedonSP`, `IsFolderBasedTrackingEnabled`, `IsFullTextSearchEnabled`, `IsGeospatialAzureMapsIntegrationEnabled`, `IsHierarchicalSecurityModelEnabled`, `IsIdeasDataCollectionEnabled`, `IsLUISEnabledforD365Bot`, `IsMailboxForcedUnlockingEnabled`, `IsMailboxInactiveBackoffEnabled`, `IsManualSalesForecastingEnabled`, `IsMobileClientOnDemandSyncEnabled`, `IsMobileOfflineEnabled`, `IsModelDrivenAppsInMSTeamsEnabled`, `IsMoneySavingsAllowed`, `IsMSTeamsCollaborationEnabled`, `IsMSTeamsEnabled`, `IsMSTeamsSettingChangedByUser`, `IsMSTeamsUserSyncEnabled`, `IsNewAddProductExperienceEnabled`, `IsNotesAnalysisEnabled`, `IsNotificationForD365InTeamsEnabled`, `IsOfficeGraphEnabled`, `IsOneDriveEnabled`, `IsPAIEnabled`, `IsPDFGenerationEnabled`, `IsPerProcessCapacityOverageEnabled`, `IsPlaybookEnabled`, `IsPresenceEnabled`, `IsPreviewEnabledForActionCard`, `IsPreviewForAutoCaptureEnabled`, `IsPreviewForEmailMonitoringAllowed`, `IsPriceListMandatory`, `IsProcessCapacityAutoClaimEnabled`, `IsProcessMiningEnabled`, `IsQuickCreateEnabledForOpportunityClose`, `IsReadAuditEnabled`, `IsRelationshipInsightsEnabled`, `IsResourceBookingExchangeSyncEnabled`, `IsRichTextNotesEnabled`, `IsRpaAutoscaleAadJoinEnabled`, `IsRpaAutoscaleEnabled`, `IsRpaBoxCrossGeoEnabled`, `IsRpaBoxEnabled`, `IsRpaUnattendedEnabled`, `IsSalesAssistantEnabled`, `IsSendCuaAuditLogToPurviewEnabled`, `IsSharingInOrgAllowed`, `IsSOPIntegrationEnabled`, `IsTextWrapEnabled`, `IsUploadCuaLogToDataverseEnabled`, `IsUserAccessAuditEnabled`, `ISVIntegrationCode`, `IsWorkQueueSavingsEnabled`, `IsWriteInProductsAllowed`, `KaPrefix`, `KbPrefix`, `KMSettings`, `LanguageCode`, `LegacyAppToggle`, `LocaleId`, `LongDateFormatCode`, `LookupCharacterCountBeforeResolve`, `LookupResolveDelayMS`, `MailboxIntermittentIssueMinRange`, `MailboxPermanentIssueMinRange`, `MaxActionStepsInBPF`, `MaxAllowedPendingRollupJobCount`, `MaxAllowedPendingRollupJobPercentage`, `MaxAppointmentDurationDays`, `MaxConditionsForMobileOfflineFilters`, `MaxDepthForHierarchicalSecurityModel`, `MaxFolderBasedTrackingMappings`, `MaximumActiveBusinessProcessFlowsAllowedPerEntity`, `MaximumDynamicPropertiesAllowed`, `MaximumEntitiesWithActiveSLA`, `MaximumSLAKPIPerEntityWithActiveSLA`, `MaximumTrackingNumber`, `MaxProductsInBundle`, `MaxRecordsForExportToExcel`, `MaxRecordsForLookupFilters`, `MaxRollupFieldsPerEntity`, `MaxRollupFieldsPerOrg`, `MaxSLAItemsPerSLA`, `MaxUploadFileSize`, `MicrosoftFlowEnvironment`, `MinAddressBookSyncInterval`, `MinOfflineSyncInterval`, `MinOutlookSyncInterval`, `MobileOfflineSyncInterval`, `ModernAdvancedFindFiltering`, `ModernAppDesignerCoauthoringEnabled`, `MultiColumnSortEnabled`, `Name`, `NaturalLanguageAssistFilter`, `NegativeCurrencyFormatCode`, `NegativeFormatCode`, `NewSearchExperienceEnabled`, `NextTrackingNumber`, `NotifyMailboxOwnerOfEmailServerLevelAlerts`, `NumberFormat`, `NumberGroupFormat`, `NumberSeparator`, `OfficeAppsAutoDeploymentEnabled`, `OfficeGraphDelveUrl`, `OOBPriceCalculationEnabled`, `OptOutSchemaV2EnabledByDefault`, `OrderPrefix`, `OrgDbOrgSettings`, `OrgInsightsEnabled`, `PaiPreviewScenarioEnabled`, `PastExpansionWindow`, `PcfDatasetGridEnabled`, `PerformACTSyncAfter`, `Picture`, `PinpointLanguageCode`, `PluginTraceLogSetting`, `PMDesignator`, `PostMessageWhitelistDomains`, `PowerAppsMakerBotEnabled`, `PowerBIAllowCrossRegionOperations`, `PowerBIAutomaticPermissionsAssignment`, `PowerBIComponentsCreate`, `PowerBiFeatureEnabled`, `PricingDecimalPrecision`, `PrivacyStatementUrl`, `PrivilegeUserGroupId`, `PrivReportingGroupId`, `PrivReportingGroupName`, `ProductRecommendationsEnabled`, `QualifyLeadAdditionalOptions`, `QuickActionToOpenRecordsInSidePaneEnabled`, `QuickFindRecordLimitEnabled`, `QuotePrefix`, `RecalculateSLA`, `RecurrenceDefaultNumberOfOccurrences`, `RecurrenceExpansionJobBatchInterval`, `RecurrenceExpansionJobBatchSize`, `RecurrenceExpansionSynchCreateMax`, `ReferenceSiteMapXml`, `ReleaseCadence`, `ReleaseChannel`, `ReleaseWaveName`, `RelevanceSearchEnabledByPlatform`, `RelevanceSearchModifiedOn`, `RenderSecureIFrameForEmail`, `ReportingGroupId`, `ReportingGroupName`, `ReportScriptErrors`, `RequireApprovalForQueueEmail`, `RequireApprovalForUserEmail`, `ResolveSimilarUnresolvedEmailAddress`, `RestrictGuestUserAccess`, `RestrictStatusUpdate`, `ReverseProxyIpAddresses`, `RiErrorStatus`, `SameSiteModeForSessionCookie`, `SampleDataImportId`, `SavingEventsTTLInMinutes`, `SchemaNamePrefix`, `SendBulkEmailInUCI`, `ServeStaticResourcesFromAzureCDN`, `SessionRecordingEnabled`, `SessionTimeoutEnabled`, `SessionTimeoutInMins`, `SessionTimeoutReminderInMins`, `SharePointDeploymentType`, `ShareToPreviousOwnerOnAssign`, `ShowKBArticleDeprecationNotification`, `ShowWeekNumber`, `SignupOutlookDownloadFWLink`, `SiteMapXml`, `SlaPauseStates`, `SocialInsightsEnabled`, `SocialInsightsInstance`, `SocialInsightsTermsAccepted`, `SortId`, `SqlAccessGroupId`, `SqlAccessGroupName`, `SQMEnabled`, `SupportUserId`, `SuppressSLA`, `SuppressValidationEmails`, `SyncBulkOperationBatchSize`, `SyncBulkOperationMaxLimit`, `SyncOptInSelection`, `SyncOptInSelectionStatus`, `SystemUserId`, `TableScopedDVSearchInApps`, `TagMaxAggressiveCycles`, `TagPollingPeriod`, `TaskBasedFlowEnabled`, `TeamsChatDataSync`, `TelemetryInstrumentationKey`, `TextAnalyticsEnabled`, `TimeFormatCode`, `TimeFormatString`, `TimeSeparator`, `TimeZoneRuleVersionNumber`, `TokenExpiry`, `TokenKey`, `TraceLogMaximumAgeInDays`, `TrackingPrefix`, `TrackingTokenIdBase`, `TrackingTokenIdDigits`, `UniqueSpecifierLength`, `UnresolveEmailAddressIfMultipleMatch`, `UseInbuiltRuleForDefaultPricelistSelection`, `UseLegacyRendering`, `UsePositionHierarchy`, `UseQuickFindViewForGridSearch`, `UserAccessAuditingInterval`, `UseReadForm`, `UserGroupId`, `UserRatingEnabled`, `UseSkypeProtocol`, `UTCConversionTimeZoneCode`, `ValidationMode`, `WebResourceHash`, `WeekStartDayCode`, `WidgetProperties`, `YammerGroupId`, `YammerNetworkPermalink`, `YammerOAuthAccessTokenExpired`, `YammerPostMethod`, `YearStartWeekCode`

### Read-only

`BaseCurrencyPrecision`, `BaseCurrencySymbol`, `BaseISOCurrencyCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CurrentImportSequenceNumber`, `CurrentParsedTableNumber`, `DaysSinceRecordLastModifiedMaxValue`, `DisabledReason`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `FiscalSettingsUpdated`, `IsAllMoneyDecimal`, `IsClusteringEnabled`, `IsDisabled`, `MaxSupportedInternetExplorerVersion`, `MaxVerboseLoggingMailbox`, `MaxVerboseLoggingSyncCycles`, `MetadataSyncLastTimeOfNeverExpiredDeletedObjects`, `MetadataSyncTimestamp`, `MobileOfflineMinLicenseProd`, `MobileOfflineMinLicenseTrial`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NextCustomObjectTypeCode`, `OrganizationId`, `OrganizationState`, `ParsedTableColumnPrefix`, `ParsedTablePrefix`, `V3CalloutConfigHash`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `basecurrency_organization` | [transactioncurrency](transactioncurrency.md) | `basecurrencyid` | `basecurrencyid` |
| `calendar_organization` | [calendar](calendar.md) | `businessclosurecalendarid` | `businessclosurecalendarid_calendar` |
| `DefaultMobileOfflineProfile_Organization` | [mobileofflineprofile](mobileofflineprofile.md) | `defaultmobileofflineprofileid` | `defaultmobileofflineprofileid` |
| `EmailServerProfile_Organization` | [emailserverprofile](emailserverprofile.md) | `defaultemailserverprofileid` | `defaultemailserverprofileid` |
| `lk_organization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_organizationbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `Template_Organization` | [template](template.md) | `acknowledgementtemplateid` | `acknowledgementtemplateid` |

### One-to-Many (147)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customcontrol_organization` | _n/a_ | `organizationid` | _n/a_ |
| `customcontroldefaultconfig_organization` | _n/a_ | `organizationid` | _n/a_ |
| `customcontrolresource_organization` | _n/a_ | `organizationid` | _n/a_ |
| `languagelocale_organization` | _n/a_ | `organizationid` | _n/a_ |
| `lk_dataperformance_organizationid` | _n/a_ | `organizationid` | _n/a_ |
| `lk_documenttemplatebase_organization` | _n/a_ | `organizationid` | _n/a_ |
| `lk_fieldsecurityprofile_organizationid` | _n/a_ | `organizationid` | _n/a_ |
| `lk_principalobjectattributeaccess_organizationid` | _n/a_ | `organizationid` | _n/a_ |
| `MobileOfflineProfile_organization` | _n/a_ | `organizationid` | _n/a_ |
| `MobileOfflineProfileItem_organization` | _n/a_ | `organizationid` | _n/a_ |
| `MobileOfflineProfileItemAssociation_organization` | _n/a_ | `organizationid` | _n/a_ |
| `organization_aciviewmapper` | _n/a_ | `organizationid` | _n/a_ |
| `organization_adx_externalidentity` | _n/a_ | `organizationid` | _n/a_ |
| `organization_adx_webformsession` | _n/a_ | `organizationid` | _n/a_ |
| `organization_aicopilot` | _n/a_ | `organizationid` | _n/a_ |
| `organization_aiplugintitle` | _n/a_ | `organizationid` | _n/a_ |
| `organization_allowedmcpclient` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appaction` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appactionmigration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appactionrule` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appconfig` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appconfiginstance` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appconfigmaster` | _n/a_ | `organizationid` | _n/a_ |
| `organization_application` | _n/a_ | `organizationid` | _n/a_ |
| `organization_appmodule` | _n/a_ | `organizationid` | _n/a_ |
| `Organization_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organization_attributeclusterconfig` | _n/a_ | `organizationid` | _n/a_ |
| `Organization_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organization_business_unit_news_articles` | _n/a_ | `organizationid` | _n/a_ |
| `organization_business_units` | _n/a_ | `organizationid` | _n/a_ |
| `organization_calendars` | _n/a_ | `organizationid` | _n/a_ |
| `organization_catalog` | _n/a_ | `organizationid` | _n/a_ |
| `organization_catalogassignment` | _n/a_ | `organizationid` | _n/a_ |
| `organization_complexcontrols` | _n/a_ | `organizationid` | _n/a_ |
| `organization_connection_roles` | _n/a_ | `organizationid` | _n/a_ |
| `organization_copilotexamplequestion` | _n/a_ | `organizationid` | _n/a_ |
| `organization_custom_displaystrings` | _n/a_ | `organizationid` | _n/a_ |
| `organization_datalakeworkspace` | _n/a_ | `organizationid` | _n/a_ |
| `organization_datalakeworkspacepermission` | _n/a_ | `organizationid` | _n/a_ |
| `organization_dataprocessingconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_delegatedauthorization` | _n/a_ | `organizationid` | _n/a_ |
| `organization_emailaddressconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_emailserverprofile` | _n/a_ | `organizationid` | _n/a_ |
| `organization_entityanalyticsconfig` | _n/a_ | `organizationid` | _n/a_ |
| `organization_entityclusterconfig` | _n/a_ | `organizationid` | _n/a_ |
| `organization_entitydataprovider` | _n/a_ | `organizationid` | _n/a_ |
| `organization_entityrecordfilter` | _n/a_ | `organizationid` | _n/a_ |
| `organization_expiredprocess` | _n/a_ | `organizationid` | _n/a_ |
| `organization_importjob` | _n/a_ | `organizationid` | _n/a_ |
| `organization_kb_article_templates` | _n/a_ | `organizationid` | _n/a_ |
| `organization_kb_articles` | _n/a_ | `organizationid` | _n/a_ |
| `organization_KnowledgeBaseRecord` | _n/a_ | `organizationid` | _n/a_ |
| `organization_mailbox` | _n/a_ | `organizationid` | _n/a_ |
| `Organization_MailboxTrackingFolder` | _n/a_ | `organizationid` | _n/a_ |
| `organization_mainfewshot` | _n/a_ | `organizationid` | _n/a_ |
| `organization_makerfewshot` | _n/a_ | `organizationid` | _n/a_ |
| `organization_maskingrule` | _n/a_ | `organizationid` | _n/a_ |
| `organization_metadataforarchival` | _n/a_ | `organizationid` | _n/a_ |
| `organization_metric` | _n/a_ | `organizationid` | _n/a_ |
| `organization_mobileofflineprofileextension` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_appinsightsmetadata` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_federatedarticleincident` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_helppage` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_insightsstorevirtualentity` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_kmpersonalizationsetting` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_knowledgeconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_modulerundetail` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_solutionhealthruleset` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_tour` | _n/a_ | `organizationid` | _n/a_ |
| `organization_msdyn_workflowactionstatus` | _n/a_ | `organizationid` | _n/a_ |
| `organization_navigationsetting` | _n/a_ | `organizationid` | _n/a_ |
| `organization_newprocess` | _n/a_ | `organizationid` | _n/a_ |
| `organization_officegraphdocument` | _n/a_ | `organizationid` | _n/a_ |
| `organization_organizationdatasyncfnostate` | _n/a_ | `organizationid` | _n/a_ |
| `organization_organizationdatasyncstate` | _n/a_ | `organizationid` | _n/a_ |
| `organization_organizationdatasyncsubscription` | _n/a_ | `organizationid` | _n/a_ |
| `organization_organizationdatasyncsubscriptionentity` | _n/a_ | `organizationid` | _n/a_ |
| `organization_organizationdatasyncsubscriptionfnotable` | _n/a_ | `organizationid` | _n/a_ |
| `organization_package` | _n/a_ | `organizationid` | _n/a_ |
| `organization_packagehistory` | _n/a_ | `organizationid` | _n/a_ |
| `organization_pluginassembly` | _n/a_ | `organizationid` | _n/a_ |
| `organization_pluginpackage` | _n/a_ | `organizationid` | _n/a_ |
| `organization_plugintype` | _n/a_ | `organizationid` | _n/a_ |
| `organization_plugintypestatistic` | _n/a_ | `organizationid` | _n/a_ |
| `organization_position` | _n/a_ | `organizationid` | _n/a_ |
| `organization_post` | _n/a_ | `organizationid` | _n/a_ |
| `organization_PostComment` | _n/a_ | `organizationid` | _n/a_ |
| `organization_postlike` | _n/a_ | `organizationid` | _n/a_ |
| `organization_privilegesremovalsetting` | _n/a_ | `organizationid` | _n/a_ |
| `organization_publisher` | _n/a_ | `organizationid` | _n/a_ |
| `organization_purviewlabelinfo` | _n/a_ | `organizationid` | _n/a_ |
| `organization_queueitems` | _n/a_ | `organizationid` | _n/a_ |
| `organization_queues` | _n/a_ | `organizationid` | _n/a_ |
| `organization_recommendeddocument` | _n/a_ | `organizationid` | _n/a_ |
| `organization_recordfilter` | _n/a_ | `organizationid` | _n/a_ |
| `organization_recyclebinconfig` | _n/a_ | `organizationid` | _n/a_ |
| `organization_relationshipattribute` | _n/a_ | `organizationid` | _n/a_ |
| `organization_retentionoperationdetail` | _n/a_ | `organizationid` | _n/a_ |
| `organization_roleeditorlayout` | _n/a_ | `organizationid` | _n/a_ |
| `organization_roles` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sa_suggestedaction` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sa_suggestedactioncriteria` | _n/a_ | `organizationid` | _n/a_ |
| `organization_saved_queries` | _n/a_ | `organizationid` | _n/a_ |
| `organization_saved_query_visualizations` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sdkmessage` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sdkmessagefilter` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sdkmessageprocessingstep` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sdkmessageprocessingstepimage` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sdkmessageprocessingstepsecureconfig` | _n/a_ | `organizationid` | _n/a_ |
| `organization_searchattributesettings` | _n/a_ | `organizationid` | _n/a_ |
| `organization_searchcustomanalyzer` | _n/a_ | `organizationid` | _n/a_ |
| `organization_searchrelationshipsettings` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sensitivitylabelattributemapping` | _n/a_ | `organizationid` | _n/a_ |
| `organization_serviceendpoint` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sharedlinksetting` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sharepointmanagedidentity` | _n/a_ | `organizationid` | _n/a_ |
| `organization_similarityrule` | _n/a_ | `organizationid` | _n/a_ |
| `organization_sitemap` | _n/a_ | `organizationid` | _n/a_ |
| `organization_solution` | _n/a_ | `organizationid` | _n/a_ |
| `organization_solutioncomponentattributeconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_solutioncomponentconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_solutioncomponentrelationshipconfiguration` | _n/a_ | `organizationid` | _n/a_ |
| `organization_subjects` | _n/a_ | `organizationid` | _n/a_ |
| `organization_supportusertable` | _n/a_ | `organizationid` | _n/a_ |
| `organization_synapselinkexternaltablestate` | _n/a_ | `organizationid` | _n/a_ |
| `organization_synapselinkprofile` | _n/a_ | `organizationid` | _n/a_ |
| `organization_synapselinkprofileentity` | _n/a_ | `organizationid` | _n/a_ |
| `organization_synapselinkprofileentitystate` | _n/a_ | `organizationid` | _n/a_ |
| `organization_synapselinkschedule` | _n/a_ | `organizationid` | _n/a_ |
| `Organization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `organization_system_users` | _n/a_ | `organizationid` | _n/a_ |
| `organization_systemforms` | _n/a_ | `organizationid` | _n/a_ |
| `organization_teammobileofflineprofilemembership` | _n/a_ | `organizationid` | _n/a_ |
| `organization_teams` | _n/a_ | `organizationid` | _n/a_ |
| `organization_territories` | _n/a_ | `organizationid` | _n/a_ |
| `organization_textanalyticsentitymapping` | _n/a_ | `organizationid` | _n/a_ |
| `organization_theme` | _n/a_ | `organizationid` | _n/a_ |
| `organization_tracelog` | _n/a_ | `organizationid` | _n/a_ |
| `organization_transactioncurrencies` | _n/a_ | `organizationid` | _n/a_ |
| `organization_translationprocess` | _n/a_ | `organizationid` | _n/a_ |
| `organization_UserMapping` | _n/a_ | `organizationid` | _n/a_ |
| `organization_usermobileofflineprofilemembership` | _n/a_ | `organizationid` | _n/a_ |
| `organization_userrating` | _n/a_ | `organizationid` | _n/a_ |
| `organization_viewasexamplequestion` | _n/a_ | `organizationid` | _n/a_ |
| `organization_virtualentitymetadata` | _n/a_ | `organizationid` | _n/a_ |
| `organization_webwizard` | _n/a_ | `organizationid` | _n/a_ |
| `webresource_organization` | _n/a_ | `organizationid` | _n/a_ |


## Source

Generated from [organization.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/organization.md) on 2026-05-06.