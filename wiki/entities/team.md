---
logical: "team"
display: "Team"
entitySetName: "teams"
primaryId: "teamid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
synonyms_it: ["team", "gruppo", "gruppo lavoro"]
synonyms_en: ["team", "group"]
---

# Team

Collection of system users that routinely collaborate. Teams can be used to simplify record sharing and provide team members with common access to organization data when team members belong to different Business Units.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `team` |
| Display name | Team |
| Display (plural) | Teams |
| Schema name | `Team` |
| Entity set (Web API) | `teams` |
| Primary id attribute | `teamid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/teams?$select=name&$top=10
GET /api/data/v9.2/teams(<guid>)
POST /api/data/v9.2/teams
PATCH /api/data/v9.2/teams(<guid>)
DELETE /api/data/v9.2/teams(<guid>)
```

## Attributes

Writable: **21** · Read-only: **15**

### Writable

`AdministratorId`, `AzureActiveDirectoryObjectId`, `BusinessUnitId`, `DelegatedAuthorizationId`, `Description`, `EMailAddress`, `ImportSequenceNumber`, `MembershipType`, `Name`, `OverriddenCreatedOn`, `ProcessId`, `QueueId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `StageId`, `TeamId`, `TeamTemplateId`, `TeamType`, `TransactionCurrencyId`, `TraversedPath`, `YomiName`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsDefault`, `IsSasTokenSet`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OrganizationIdName`, `SasToken`, `ShareLinkQualifier`, `SystemManaged`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_teams` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `knowledgearticle_Teams` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `lk_team_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_team_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_teambase_administratorid` | [systemuser](systemuser.md) | `administratorid` | `administratorid` |
| `lk_teambase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_teambase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_teams` | [organization](organization.md) | `organizationid` | `organizationid_organization` |
| `processstage_teams` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `queue_team` | [queue](queue.md) | `queueid` | `queueid` |
| `team_delegatedauthorization` | [delegatedauthorization](delegatedauthorization.md) | `delegatedauthorizationid` | `delegatedauthorizationid` |
| `teamtemplate_Teams` | [teamtemplate](teamtemplate.md) | `teamtemplateid` | `associatedteamtemplateid` |
| `TransactionCurrency_Team` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (273)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_team_owningteam` | _n/a_ | `owningteam` | _n/a_ |
| `adx_portalcomment_team_owningteam` | _n/a_ | `owningteam` | _n/a_ |
| `chat_team_owningteam` | _n/a_ | `owningteam` | _n/a_ |
| `ImportFile_Team` | _n/a_ | `recordsownerid` | _n/a_ |
| `OwningTeam_postfollows` | _n/a_ | `owningteam` | _n/a_ |
| `team_accounts` | _n/a_ | `owningteam` | _n/a_ |
| `team_activity` | _n/a_ | `owningteam` | _n/a_ |
| `team_activityfileattachment` | _n/a_ | `owningteam` | _n/a_ |
| `team_adx_invitation` | _n/a_ | `owningteam` | _n/a_ |
| `team_adx_setting` | _n/a_ | `owningteam` | _n/a_ |
| `team_aiplugin` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginauth` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginconversationstarter` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginconversationstartermapping` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginexternalschema` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginexternalschemaproperty` | _n/a_ | `owningteam` | _n/a_ |
| `team_aiplugingovernance` | _n/a_ | `owningteam` | _n/a_ |
| `team_aiplugingovernanceext` | _n/a_ | `owningteam` | _n/a_ |
| `team_aiplugininstance` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginoperation` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginoperationparameter` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginoperationresponsetemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_aipluginusersetting` | _n/a_ | `owningteam` | _n/a_ |
| `team_annotations` | _n/a_ | `owningteam` | _n/a_ |
| `team_appnotification` | _n/a_ | `owningteam` | _n/a_ |
| `team_appointment` | _n/a_ | `owningteam` | _n/a_ |
| `team_approvalprocess` | _n/a_ | `owningteam` | _n/a_ |
| `team_approvalstageapproval` | _n/a_ | `owningteam` | _n/a_ |
| `team_approvalstagecondition` | _n/a_ | `owningteam` | _n/a_ |
| `team_approvalstageintelligent` | _n/a_ | `owningteam` | _n/a_ |
| `team_approvalstageorder` | _n/a_ | `owningteam` | _n/a_ |
| `team_asyncoperation` | _n/a_ | `owningteam` | _n/a_ |
| `Team_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_bot` | _n/a_ | `owningteam` | _n/a_ |
| `team_botcomponent` | _n/a_ | `owningteam` | _n/a_ |
| `team_botcomponentcollection` | _n/a_ | `owningteam` | _n/a_ |
| `Team_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_businessprocess` | _n/a_ | `owningteam` | _n/a_ |
| `team_card` | _n/a_ | `owningteam` | _n/a_ |
| `team_certificatecredential` | _n/a_ | `owningteam` | _n/a_ |
| `team_componentversion` | _n/a_ | `owningteam` | _n/a_ |
| `team_connectioninstance` | _n/a_ | `owningteam` | _n/a_ |
| `team_connectionreference` | _n/a_ | `owningteam` | _n/a_ |
| `team_connections1` | _n/a_ | `record1id` | _n/a_ |
| `team_connections2` | _n/a_ | `record2id` | _n/a_ |
| `team_connector` | _n/a_ | `owningteam` | _n/a_ |
| `team_contacts` | _n/a_ | `owningteam` | _n/a_ |
| `team_conversationtranscript` | _n/a_ | `owningteam` | _n/a_ |
| `team_copilotglossaryterm` | _n/a_ | `owningteam` | _n/a_ |
| `team_copilotsynonyms` | _n/a_ | `owningteam` | _n/a_ |
| `team_credential` | _n/a_ | `owningteam` | _n/a_ |
| `team_customapi` | _n/a_ | `owningteam` | _n/a_ |
| `team_datalakefolder` | _n/a_ | `owningteam` | _n/a_ |
| `team_desktopflowbinary` | _n/a_ | `owningteam` | _n/a_ |
| `team_desktopflowmodule` | _n/a_ | `owningteam` | _n/a_ |
| `Team_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Team_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `team_DuplicateRules` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvfilesearch` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvfilesearchattribute` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvfilesearchentity` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvtablesearch` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvtablesearchattribute` | _n/a_ | `owningteam` | _n/a_ |
| `team_dvtablesearchentity` | _n/a_ | `owningteam` | _n/a_ |
| `team_email` | _n/a_ | `owningteam` | _n/a_ |
| `team_email_templates` | _n/a_ | `owningteam` | _n/a_ |
| `team_emailserverprofile` | _n/a_ | `owningteam` | _n/a_ |
| `team_environmentvariabledefinition` | _n/a_ | `owningteam` | _n/a_ |
| `team_exchangesyncidmapping` | _n/a_ | `owningteam` | _n/a_ |
| `team_exportedexcel` | _n/a_ | `owningteam` | _n/a_ |
| `team_exportsolutionupload` | _n/a_ | `owningteam` | _n/a_ |
| `team_fabricaiskill` | _n/a_ | `owningteam` | _n/a_ |
| `team_fax` | _n/a_ | `owningteam` | _n/a_ |
| `team_featurecontrolsetting` | _n/a_ | `owningteam` | _n/a_ |
| `team_federatedknowledgeconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_federatedknowledgeentityconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowaggregation` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowcapacityassignment` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowcredentialapplication` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowevent` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowmachine` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowmachinegroup` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowmachineimage` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowmachineimageversion` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowmachinenetwork` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowrun` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowsession` | _n/a_ | `owningteam` | _n/a_ |
| `team_flowsessionbinary` | _n/a_ | `owningteam` | _n/a_ |
| `team_fxexpression` | _n/a_ | `owningteam` | _n/a_ |
| `team_goal` | _n/a_ | `owningteam` | _n/a_ |
| `team_goal_goalowner` | _n/a_ | `goalownerid` | _n/a_ |
| `team_goalrollupquery` | _n/a_ | `owningteam` | _n/a_ |
| `team_governanceconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_ImportData` | _n/a_ | `owningteam` | _n/a_ |
| `team_ImportFiles` | _n/a_ | `owningteam` | _n/a_ |
| `team_ImportLogs` | _n/a_ | `owningteam` | _n/a_ |
| `team_ImportMaps` | _n/a_ | `owningteam` | _n/a_ |
| `team_Imports` | _n/a_ | `owningteam` | _n/a_ |
| `team_indexedtrait` | _n/a_ | `owningteam` | _n/a_ |
| `team_interactionforemail` | _n/a_ | `owningteam` | _n/a_ |
| `team_keyvaultreference` | _n/a_ | `owningteam` | _n/a_ |
| `team_knowledgearticle` | _n/a_ | `owningteam` | _n/a_ |
| `team_knowledgefaq` | _n/a_ | `owningteam` | _n/a_ |
| `team_letter` | _n/a_ | `owningteam` | _n/a_ |
| `team_mailbox` | _n/a_ | `owningteam` | _n/a_ |
| `team_mailboxtrackingfolder` | _n/a_ | `owningteam` | _n/a_ |
| `team_managedidentity` | _n/a_ | `owningteam` | _n/a_ |
| `team_mcpserver` | _n/a_ | `owningteam` | _n/a_ |
| `team_mcptool` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibdataset` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibdatasetfile` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibdatasetrecord` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibdatasetscontainer` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibfeedbackloop` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibfile` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aibfileattacheddata` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aidataprocessingevent` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aidocumenttemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aievaluationconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aievaluationrun` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aievent` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aifptrainingdocument` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aimodel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aiodimage` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aiodlabel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aiodtrainingboundingbox` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aiodtrainingimage` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitestcase` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitestcasedocument` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitestcaseinput` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitestrun` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_aitestrunbatch` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_analysiscomponent` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_analysisjob` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_analysisoverride` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_analysisresult` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_analysisresultdetail` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_copilotinteractions` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_customcontrolextendedsettings` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dataflow` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dataflow_datalakefolder` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dataflowconnectionreference` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dataflowrefreshhistory` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dataflowtemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dmsrequest` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dmsrequeststatus` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dmssyncrequest` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_dmssyncstatus` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_entitylinkchatconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_entityrefreshhistory` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_favoriteknowledgearticle` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_federatedarticle` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_fileupload` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_actionapprovalmodel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_approval` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_approvalrequest` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_approvalresponse` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_approvalstep` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_awaitallactionapprovalmodel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_awaitallapprovalmodel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_basicapprovalmodel` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_flow_flowapproval` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_formmapping` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_function` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_historicalcaseharvestbatch` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_historicalcaseharvestrun` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_integratedsearchprovider` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_kalanguagesetting` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_kbattachment` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_kmfederatedsearchconfig` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgearticleimage` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgearticletemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgeassetconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgeharvestjobrecord` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgeinteractioninsight` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgemanagementsetting` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgepersonalfilter` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgesearchfilter` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_knowledgesearchinsight` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_mobileapp` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmanalysishistory` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmbusinessruleautomationconfig` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmcalendar` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmcalendarversion` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pminferredtask` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmprocessextendedmetadataversion` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmprocesstemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmprocessusersettings` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmprocessversion` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmrecording` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmsimulation` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmtab` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmtemplate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_pmview` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_qna` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_richtextfile` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_salesforcestructuredobject` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_salesforcestructuredqnaconfig` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_schedule` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_serviceconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_slakpi` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_solutionhealthrule` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_solutionhealthruleargument` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdyn_virtualtablecolumncandidate` | _n/a_ | `owningteam` | _n/a_ |
| `team_msdynce_botcontent` | _n/a_ | `owningteam` | _n/a_ |
| `team_mspcat_catalogsubmissionfiles` | _n/a_ | `owningteam` | _n/a_ |
| `team_mspcat_packagestore` | _n/a_ | `owningteam` | _n/a_ |
| `team_nlsqregistration` | _n/a_ | `owningteam` | _n/a_ |
| `team_phonecall` | _n/a_ | `owningteam` | _n/a_ |
| `team_plannerbusinessscenario` | _n/a_ | `owningteam` | _n/a_ |
| `team_plannersyncaction` | _n/a_ | `owningteam` | _n/a_ |
| `team_plugin` | _n/a_ | `owningteam` | _n/a_ |
| `team_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_powerbidataset` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerbidatasetapdx` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerbimashupparameter` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerbireport` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerbireportapdx` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerfxrule` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagecomponent` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesddosalert` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesite` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesitelanguage` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesitepublished` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpageslog` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesmanagedidentity` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagesscanreport` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagessiteaifeedback` | _n/a_ | `owningteam` | _n/a_ |
| `team_powerpagessourcefile` | _n/a_ | `owningteam` | _n/a_ |
| `team_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `team_principalobjectattributeaccess_principalid` | _n/a_ | `principalid` | _n/a_ |
| `team_privilegecheckerrun` | _n/a_ | `owningteam` | _n/a_ |
| `team_processsession` | _n/a_ | `owningteam` | _n/a_ |
| `Team_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_processstageparameter` | _n/a_ | `owningteam` | _n/a_ |
| `team_queueitembase_workerid` | _n/a_ | `workerid` | _n/a_ |
| `team_recentlyused` | _n/a_ | `owningteam` | _n/a_ |
| `team_recurringappointmentmaster` | _n/a_ | `owningteam` | _n/a_ |
| `team_retaineddataexcel` | _n/a_ | `owningteam` | _n/a_ |
| `team_retentionconfig` | _n/a_ | `owningteam` | _n/a_ |
| `team_retentionfailuredetail` | _n/a_ | `owningteam` | _n/a_ |
| `team_retentionoperation` | _n/a_ | `owningteam` | _n/a_ |
| `team_retentionsuccessdetail` | _n/a_ | `owningteam` | _n/a_ |
| `team_savingrule` | _n/a_ | `owningteam` | _n/a_ |
| `team_sharepointdocumentlocation` | _n/a_ | `owningteam` | _n/a_ |
| `team_sharepointsite` | _n/a_ | `owningteam` | _n/a_ |
| `team_sideloadedaiplugin` | _n/a_ | `owningteam` | _n/a_ |
| `team_signal` | _n/a_ | `owningteam` | _n/a_ |
| `team_slaBase` | _n/a_ | `owningteam` | _n/a_ |
| `team_socialactivity` | _n/a_ | `owningteam` | _n/a_ |
| `team_solutioncomponentbatchconfiguration` | _n/a_ | `owningteam` | _n/a_ |
| `team_stagesolutionupload` | _n/a_ | `owningteam` | _n/a_ |
| `team_synapsedatabase` | _n/a_ | `owningteam` | _n/a_ |
| `team_SyncError` | _n/a_ | `owningteam` | _n/a_ |
| `Team_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `team_tag` | _n/a_ | `owningteam` | _n/a_ |
| `team_taggedflowsession` | _n/a_ | `owningteam` | _n/a_ |
| `team_taggedprocess` | _n/a_ | `owningteam` | _n/a_ |
| `team_task` | _n/a_ | `owningteam` | _n/a_ |
| `team_teammobileofflineprofilemembership_TeamId` | _n/a_ | `teamid` | _n/a_ |
| `team_trait` | _n/a_ | `owningteam` | _n/a_ |
| `team_unstructuredfilesearchentity` | _n/a_ | `owningteam` | _n/a_ |
| `team_unstructuredfilesearchrecord` | _n/a_ | `owningteam` | _n/a_ |
| `team_userform` | _n/a_ | `owningteam` | _n/a_ |
| `team_userquery` | _n/a_ | `owningteam` | _n/a_ |
| `team_userqueryvisualizations` | _n/a_ | `owningteam` | _n/a_ |
| `team_workflow` | _n/a_ | `owningteam` | _n/a_ |
| `team_workflowbinary` | _n/a_ | `owningteam` | _n/a_ |
| `team_workflowlog` | _n/a_ | `owningteam` | _n/a_ |
| `team_workflowmetadata` | _n/a_ | `owningteam` | _n/a_ |
| `team_workqueue` | _n/a_ | `owningteam` | _n/a_ |
| `team_workqueueitem` | _n/a_ | `owningteam` | _n/a_ |

### Many-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodelrelationship_team` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_awaitallactionmodelrelationship_team` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_awaitallmodelrelationship_team` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_basicapprovalmodelrelationship_team` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `teammembership_association` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `teamprofiles_association` | [teamid](teamid.md) | _n/a_ | _n/a_ |
| `teamroles_association` | [teamid](teamid.md) | _n/a_ | _n/a_ |

## Source

Generated from [team.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/team.md) on 2026-05-06.