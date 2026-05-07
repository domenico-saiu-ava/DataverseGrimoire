---
logical: "webresource"
display: "Web Resource"
entitySetName: "webresourceset"
primaryId: "webresourceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Web Resource

Data equivalent to files used in Web development. Web resources provide client-side components that are used to provide custom user interface elements.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `webresource` |
| Display name | Web Resource |
| Display (plural) | Web Resources |
| Schema name | `WebResource` |
| Entity set (Web API) | `webresourceset` |
| Primary id attribute | `webresourceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/webresourceset?$select=name&$top=10
GET /api/data/v9.2/webresourceset(<guid>)
POST /api/data/v9.2/webresourceset
PATCH /api/data/v9.2/webresourceset(<guid>)
DELETE /api/data/v9.2/webresourceset(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`CanBeDeleted`, `Content`, `ContentJson`, `DependencyXml`, `Description`, `DisplayName`, `IntroducedVersion`, `IsAvailableForMobileOffline`, `IsCustomizable`, `IsEnabledForMobileClient`, `IsHidden`, `LanguageCode`, `Name`, `SilverlightVersion`, `WebResourceId`, `WebResourceType`

### Read-only

`ComponentState`, `ContentFileRef`, `ContentFileRef_Name`, `ContentJsonFileRef`, `ContentJsonFileRef_Name`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `WebResourceIdUnique`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_WebResource_ContentFileRef` | [fileattachment](fileattachment.md) | `contentfileref` | `ContentFileRef` |
| `FileAttachment_WebResource_ContentJsonFileRef` | [fileattachment](fileattachment.md) | `contentjsonfileref` | `ContentJsonFileRef` |
| `lk_webresourcebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_webresourcebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `webresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `webresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `webresource_organization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_theme_logoid` | _n/a_ | `logoid` | _n/a_ |
| `solution_configuration_webresource` | _n/a_ | `configurationpageid` | _n/a_ |
| `webresource_appaction_iconwebresourceid` | _n/a_ | `iconwebresourceid` | _n/a_ |
| `webresource_appaction_onclickeventjavascriptwebresourceid` | _n/a_ | `onclickeventjavascriptwebresourceid` | _n/a_ |
| `webresource_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `webresource_savedqueryvisualizations` | _n/a_ | `webresourceid` | _n/a_ |
| `webresource_userqueryvisualizations` | _n/a_ | `webresourceid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionrule_webresource_scripts` | [webresourceid](webresourceid.md) | _n/a_ | _n/a_ |

## Source

Generated from [webresource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/webresource.md) on 2026-05-06.