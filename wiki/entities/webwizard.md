---
logical: "webwizard"
display: "Web Wizard"
entitySetName: "webwizards"
primaryId: "webwizardid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Web Wizard

Definition for a Web-based wizard.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `webwizard` |
| Display name | Web Wizard |
| Display (plural) | Web Wizards |
| Schema name | `WebWizard` |
| Entity set (Web API) | `webwizards` |
| Primary id attribute | `webwizardid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/webwizards?$select=name&$top=10
GET /api/data/v9.2/webwizards(<guid>)
POST /api/data/v9.2/webwizards
PATCH /api/data/v9.2/webwizards(<guid>)
DELETE /api/data/v9.2/webwizards(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`AccessPrivileges`, `IntroducedVersion`, `IsStaticPageSequence`, `Name`, `StartPageSequenceNumber`, `TitleResourceString`, `WebWizardId`, `WizardPageHeight`, `WizardPageWidth`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `WebWizardIdUnique`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_webwizard_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_webwizard_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_webwizard_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_webwizard_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_webwizard` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [webwizard.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/webwizard.md) on 2026-05-06.