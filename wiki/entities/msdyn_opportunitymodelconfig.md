---
logical: "msdyn_opportunitymodelconfig"
display: "OpportunityModelConfig"
entitySetName: "msdyn_opportunitymodelconfigs"
primaryId: "msdyn_opportunitymodelconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# OpportunityModelConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunitymodelconfig` |
| Display name | OpportunityModelConfig |
| Display (plural) | OpportunityModelConfig |
| Schema name | `msdyn_opportunitymodelconfig` |
| Entity set (Web API) | `msdyn_opportunitymodelconfigs` |
| Primary id attribute | `msdyn_opportunitymodelconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunitymodelconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
POST /api/data/v9.2/msdyn_opportunitymodelconfigs
PATCH /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_opportunitymodelconfigs(<guid>)
```

## Attributes

Writable: **26** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_activeOpportunityValue`, `msdyn_appliedon`, `msdyn_createonField`, `msdyn_disqualificationValue`, `msdyn_featurestate`, `msdyn_isStandardEntity`, `msdyn_modifiedonField`, `msdyn_name`, `msdyn_opportunityEntityID`, `msdyn_opportunityEntityName`, `msdyn_opportunityFormID`, `msdyn_opportunityFormName`, `msdyn_opportunitymodelconfigId`, `msdyn_opportunityViewID`, `msdyn_opportunityViewName`, `msdyn_predictionName`, `msdyn_qualificationValue`, `msdyn_statusField`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_opportunitymodelconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_opportunitymodelconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunitymodelconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunitymodelconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunitymodelconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_opportunitymodelconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_opportunitymodelconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_opportunitymodelconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunitymodelconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitymodelconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitymodelconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_opportunitymodelconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_opportunitymodelconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunitymodelconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitymodelconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunitymodelconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunitymodelconfig.md) on 2026-05-06.