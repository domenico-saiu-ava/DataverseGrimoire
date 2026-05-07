---
logical: "msdyn_knowledgeassetconfiguration"
display: "Knowledge Asset Configuration"
entitySetName: "msdyn_knowledgeassetconfigurations"
primaryId: "msdyn_knowledgeassetconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Asset Configuration

Knowledge asset configurations for data sources configured in knowledge hub.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeassetconfiguration` |
| Display name | Knowledge Asset Configuration |
| Display (plural) | Knowledge Assets with Configurations |
| Schema name | `msdyn_knowledgeassetconfiguration` |
| Entity set (Web API) | `msdyn_knowledgeassetconfigurations` |
| Primary id attribute | `msdyn_knowledgeassetconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeassetconfigurations?$select=name&$top=10
GET /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_knowledgeassetconfigurations
PATCH /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aipluginoperationid`, `msdyn_customapiid`, `msdyn_knowledgeassetconfigurationId`, `msdyn_providerspecificconfiguration`, `msdyn_providertype`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgeassetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgeassetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeassetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeassetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeassetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgeassetconfiguration_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `msdyn_knowledgeassetconfiguration_customapiid` | [customapi](customapi.md) | `msdyn_customapiid` | `msdyn_customapiid` |
| `owner_msdyn_knowledgeassetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgeassetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgeassetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeassetconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgeassetconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgeassetconfiguration.md) on 2026-05-06.