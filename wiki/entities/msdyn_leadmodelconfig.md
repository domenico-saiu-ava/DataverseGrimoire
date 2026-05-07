---
logical: "msdyn_leadmodelconfig"
display: "LeadModelConfig"
entitySetName: "msdyn_leadmodelconfigs"
primaryId: "msdyn_leadmodelconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# LeadModelConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadmodelconfig` |
| Display name | LeadModelConfig |
| Display (plural) | LeadModelConfig |
| Schema name | `msdyn_leadmodelconfig` |
| Entity set (Web API) | `msdyn_leadmodelconfigs` |
| Primary id attribute | `msdyn_leadmodelconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadmodelconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
POST /api/data/v9.2/msdyn_leadmodelconfigs
PATCH /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_leadmodelconfigs(<guid>)
```

## Attributes

Writable: **26** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_activeLeadValue`, `msdyn_appliedon`, `msdyn_createonField`, `msdyn_disqualificationValue`, `msdyn_featurestate`, `msdyn_isStandardEntity`, `msdyn_leadEntityID`, `msdyn_leadEntityName`, `msdyn_leadFormID`, `msdyn_leadFormName`, `msdyn_leadmodelconfigId`, `msdyn_leadViewID`, `msdyn_leadViewName`, `msdyn_modifiedonField`, `msdyn_name`, `msdyn_predictionName`, `msdyn_qualificationValue`, `msdyn_statusField`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leadmodelconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leadmodelconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadmodelconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadmodelconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadmodelconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_leadmodelconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leadmodelconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leadmodelconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadmodelconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadmodelconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadmodelconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leadmodelconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leadmodelconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadmodelconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leadmodelconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leadmodelconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leadmodelconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leadmodelconfig.md) on 2026-05-06.