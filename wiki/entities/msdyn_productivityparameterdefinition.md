---
logical: "msdyn_productivityparameterdefinition"
display: "Parameter definition"
entitySetName: "msdyn_productivityparameterdefinitions"
primaryId: "msdyn_productivityparameterdefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Parameter definition

Macro parameter definitions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityparameterdefinition` |
| Display name | Parameter definition |
| Display (plural) | Parameter definitions |
| Schema name | `msdyn_productivityparameterdefinition` |
| Entity set (Web API) | `msdyn_productivityparameterdefinitions` |
| Primary id attribute | `msdyn_productivityparameterdefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityparameterdefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
POST /api/data/v9.2/msdyn_productivityparameterdefinitions
PATCH /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_defaultvalue`, `msdyn_description`, `msdyn_displayname`, `msdyn_jsonobjectstructure`, `msdyn_name`, `msdyn_parametertype`, `msdyn_productivityparameterdefinitionId`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivityparameterdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivityparameterdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityparameterdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityparameterdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityparameterdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_productivityparameterdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivityparameterdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivityparameterdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityparameterdefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityparameterdefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityparameterdefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivityparameterdefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivityparameterdefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivityparameterdefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityparameterdefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actioninputparameter_msdyn_par` | [msdyn_productivityparameterdefinitionid](msdyn_productivityparameterdefinitionid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` | [msdyn_productivityparameterdefinitionid](msdyn_productivityparameterdefinitionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_productivityparameterdefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivityparameterdefinition.md) on 2026-05-06.