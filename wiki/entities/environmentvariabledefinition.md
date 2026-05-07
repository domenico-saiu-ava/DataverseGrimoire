---
logical: "environmentvariabledefinition"
display: "Environment Variable Definition"
entitySetName: "environmentvariabledefinitions"
primaryId: "environmentvariabledefinitionid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "UserOwned"
---

# Environment Variable Definition

Contains information about the settable variable: its type, default value, and etc.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `environmentvariabledefinition` |
| Display name | Environment Variable Definition |
| Display (plural) | Environment Variable Definitions |
| Schema name | `EnvironmentVariableDefinition` |
| Entity set (Web API) | `environmentvariabledefinitions` |
| Primary id attribute | `environmentvariabledefinitionid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/environmentvariabledefinitions?$select=schemaname&$top=10
GET /api/data/v9.2/environmentvariabledefinitions(<guid>)
POST /api/data/v9.2/environmentvariabledefinitions
PATCH /api/data/v9.2/environmentvariabledefinitions(<guid>)
DELETE /api/data/v9.2/environmentvariabledefinitions(<guid>)
```

## Attributes

Writable: **26** · Read-only: **18**

### Writable

`ApiId`, `ConnectionReferenceId`, `DefaultValue`, `Description`, `DisplayName`, `EnvironmentVariableDefinitionId`, `Hint`, `ImportSequenceNumber`, `InputControlConfig`, `IntroducedVersion`, `IsCustomizable`, `IsRequired`, `LearnMoreUrl`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParameterKey`, `ParentDefinitionId`, `SchemaName`, `SecretStore`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`, `ValueSchema`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EnvironmentVariableDefinitionIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_environmentvariabledefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `envdefinition_envdefinition` | [environmentvariabledefinition](environmentvariabledefinition.md) | `parentdefinitionid` | `ParentDefinitionId` |
| `lk_environmentvariabledefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_environmentvariabledefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_environmentvariabledefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_environmentvariabledefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_environmentvariabledefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_environmentvariabledefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_environmentvariabledefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `envdefinition_envdefinition` | _n/a_ | `parentdefinitionid` | _n/a_ |
| `environmentvariabledefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariabledefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariabledefinition_credential_certificate` | _n/a_ | `certificate` | _n/a_ |
| `environmentvariabledefinition_credential_cyberarkobject` | _n/a_ | `cyberarkobject` | _n/a_ |
| `environmentvariabledefinition_credential_cyberarksafe` | _n/a_ | `cyberarksafe` | _n/a_ |
| `environmentvariabledefinition_credential_cyberarkusername` | _n/a_ | `cyberarkusername` | _n/a_ |
| `environmentvariabledefinition_credential_password` | _n/a_ | `password` | _n/a_ |
| `environmentvariabledefinition_credential_username` | _n/a_ | `username` | _n/a_ |
| `environmentvariabledefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `environmentvariabledefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `environmentvariabledefinition_environmentvariablevalue` | _n/a_ | `environmentvariabledefinitionid` | _n/a_ |
| `environmentvariabledefinition_flowmachinenetwork_domainpassword` | _n/a_ | `domainpassword` | _n/a_ |
| `environmentvariabledefinition_flowmachinenetwork_domainusername` | _n/a_ | `domainusername` | _n/a_ |
| `environmentvariabledefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariabledefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `environmentvariabledefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `EnvironmentVariableDefinition_ReportParameter_EvironmentVariableDefinitionId` | _n/a_ | `environmentvariabledefinitionid` | _n/a_ |
| `environmentvariabledefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `envvardefinition_powerbimashupparameter` | _n/a_ | `environmentvariableid` | _n/a_ |
| `mspp_environmentvariabledefinition_mspp_sitesetting_environmentvariable` | _n/a_ | `mspp_environmentvariable` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_environmentvariabledefinition` | [environmentvariabledefinitionid](environmentvariabledefinitionid.md) | _n/a_ | _n/a_ |
| `botcomponent_environmentvariabledefinition` | [environmentvariabledefinitionid](environmentvariabledefinitionid.md) | _n/a_ | _n/a_ |
| `msdyn_connectordatasource_environmentvariable` | [environmentvariabledefinitionid](environmentvariabledefinitionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [environmentvariabledefinition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/environmentvariabledefinition.md) on 2026-05-06.