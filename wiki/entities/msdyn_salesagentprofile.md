---
logical: "msdyn_salesagentprofile"
display: "SalesAgentProfile"
entitySetName: "msdyn_salesagentprofiles"
primaryId: "msdyn_salesagentprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SalesAgentProfile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentprofile` |
| Display name | SalesAgentProfile |
| Display (plural) | salesagentprofiles |
| Schema name | `msdyn_salesagentprofile` |
| Entity set (Web API) | `msdyn_salesagentprofiles` |
| Primary id attribute | `msdyn_salesagentprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
POST /api/data/v9.2/msdyn_salesagentprofiles
PATCH /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
```

## Attributes

Writable: **30** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ActivatedBy`, `msdyn_ActivatedOn`, `msdyn_AgentLocaleCode`, `msdyn_aidisclaimer`, `msdyn_complianceprofile`, `msdyn_description`, `msdyn_emailsignaturerecordid`, `msdyn_iscomplianceenabled`, `msdyn_MicroAgentsConfiguration`, `msdyn_name`, `msdyn_otherterms`, `msdyn_previousstatuscode`, `msdyn_publisherrordetails`, `msdyn_publishstartedon`, `msdyn_publishstatus`, `msdyn_purpose`, `msdyn_SalesAgentInfo`, `msdyn_salesagentprofileId`, `msdyn_SalesAgentType`, `msdyn_SegmentInfo`, `msdyn_topic`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_systemuser_msdyn_salesagentprofile_ActivatedBy` | [systemuser](systemuser.md) | `msdyn_activatedby` | `msdyn_ActivatedBy` |
| `msdyn_systemuser_msdyn_salesagentprofile_SalesAgentInfo` | [systemuser](systemuser.md) | `msdyn_salesagentinfo` | `msdyn_SalesAgentInfo` |
| `owner_msdyn_salesagentprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentexecutionconfig_msdyn_salesagentprofileid_msdyn_salesagentprofile` | _n/a_ | `msdyn_salesagentprofileid` | _n/a_ |
| `msdyn_salesagentprocessingstate_salesagentprofile_msdyn_salesagentprofile` | _n/a_ | `msdyn_salesagentprofile` | _n/a_ |
| `msdyn_salesagentprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesagentprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesagentprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprofile_msdyn_salesagentrun_SalesAgentProfile` | _n/a_ | `msdyn_salesagentprofileid` | _n/a_ |
| `msdyn_salesagentprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_triggersalesagent_salesagentprofile_msdyn_salesagentprofile` | _n/a_ | `msdyn_salesagentprofile` | _n/a_ |


## Source

Generated from [msdyn_salesagentprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentprofile.md) on 2026-05-06.